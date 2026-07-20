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
  fullWidth?: boolean;
  inverse?: boolean;
};

export default function LanguageSwitcher({
  compact = false,
  fullWidth = false,
  inverse = false,
}: LanguageSwitcherProps) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("LocaleSwitcher");
  const [isUpdating, setIsUpdating] = useState(false);
  const availableLocales = localeDefinitions.filter(({ code }) =>
    enabledLocales.includes(code),
  );

  const handleChange = async (nextLocale: AppLocale) => {
    if (nextLocale === locale || isUpdating) return;
    setIsUpdating(true);

    try {
      const response = await fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: nextLocale }),
      });
      if (!response.ok) throw new Error("Locale cookie update failed");
      window.location.reload();
    } catch (error) {
      console.error(t("updateFailed"), error);
      setIsUpdating(false);
    }
  };

  return (
    <FormControl
      size="small"
      fullWidth={fullWidth && !compact}
      sx={{
        minWidth: compact ? 54 : 138,
        width: compact ? 54 : undefined,
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
                gap: compact ? 0 : "8px",
              }}
            >
              <LocaleFlag flagCode={selected.flagCode} />
              {!compact && <Box component="span">{selected.nativeName}</Box>}
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
          height: 42,
          borderRadius: "24px",
          background: inverse ? "rgba(255,255,255,0.08)" : "#FFF",
          color: inverse ? "#FFF" : "#333",
          fontSize: 13,
          fontWeight: 600,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: inverse ? "rgba(255,255,255,0.32)" : "#D0D5DD",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: inverse ? "#FFF" : "#98A2B3",
          },
          "& .MuiSvgIcon-root": {
            color: inverse ? "#FFF" : "#667185",
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
        }}
      >
        {availableLocales.map(({ code, nativeName, flagCode }) => (
          <MenuItem key={code} value={code} sx={{ gap: "10px" }}>
            <LocaleFlag flagCode={flagCode} />
            <Box component="span">{nativeName}</Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
