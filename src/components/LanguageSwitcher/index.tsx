"use client";

import {
  enabledLocales,
  localeDefinitions,
  type AppLocale,
} from "@/src/i18n/config";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import LocaleFlag from "./LocaleFlag";

type LanguageSwitcherProps = {
  compact?: boolean;
  dense?: boolean;
  fullWidth?: boolean;
  inverse?: boolean;
};

export default function LanguageSwitcher({
  compact = false,
  dense = false,
  fullWidth = false,
  inverse = false,
}: LanguageSwitcherProps) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("LocaleSwitcher");
  const [isUpdating, setIsUpdating] = useState(false);
  const availableLocales = localeDefinitions.filter(({ code }) =>
    enabledLocales.includes(code),
  );

  const handleChange = (nextLocale: AppLocale) => {
    if (nextLocale === locale || isUpdating) return;
    setIsUpdating(true);

    const returnTo = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    window.location.assign(
      `/api/locale?locale=${encodeURIComponent(nextLocale)}&returnTo=${encodeURIComponent(returnTo)}`,
    );
  };

  return (
    <FormControl
      size="small"
      fullWidth={fullWidth && !compact}
      sx={{
        minWidth: compact ? 54 : dense ? 116 : 138,
        width: compact ? 54 : dense ? 116 : undefined,
        flexShrink: 0,
      }}
    >
      <Select
        value={locale}
        disabled={isUpdating}
        onChange={(event) => handleChange(event.target.value as AppLocale)}
        renderValue={(selectedLocale) => {
          const selected = availableLocales.find(
            ({ code }) => code === selectedLocale,
          );
          if (!selected) return selectedLocale;

          return (
            <Box
              title={selected.nativeName}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: compact ? "center" : "flex-start",
                gap: compact ? 0 : dense ? "6px" : "8px",
                minWidth: 0,
              }}
            >
              <LocaleFlag flagCode={selected.flagCode} />
              {!compact && (
                <Box
                  component="span"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {selected.shortName}
                </Box>
              )}
            </Box>
          );
        }}
        inputProps={{ "aria-label": t("label") }}
        MenuProps={{
          PaperProps: {
            sx: { maxHeight: 360 },
          },
        }}
        sx={{
          height: dense ? 40 : 42,
          borderRadius: "24px",
          background: inverse ? "rgba(255,255,255,0.08)" : "#FFF",
          color: inverse ? "#FFF" : "#333",
          fontSize: dense ? 12 : 13,
          fontWeight: 600,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: inverse ? "rgba(255,255,255,0.32)" : "#D0D5DD",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: inverse ? "#FFF" : "#98A2B3",
          },
          "& .MuiSvgIcon-root": {
            color: inverse ? "#FFF" : "#667185",
            right: dense ? 8 : 10,
            width: 18,
            height: 18,
          },
          ...(compact && {
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingInlineStart: "7px",
              paddingInlineEnd: "25px !important",
            },
          }),
          ...(dense && {
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              minWidth: 0,
              paddingInlineStart: "9px",
              paddingInlineEnd: "34px !important",
            },
          }),
        }}
      >
        {availableLocales.map(({ code, nativeName, shortName, flagCode }) => (
          <MenuItem key={code} value={code} sx={{ gap: "10px" }}>
            <LocaleFlag flagCode={flagCode} />
            <Box component="span" title={nativeName}>
              {shortName}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
