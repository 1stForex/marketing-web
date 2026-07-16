"use client";

import {
  enabledLocales,
  localeDefinitions,
  type AppLocale,
} from "@/src/i18n/config";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

type LanguageSwitcherProps = {
  fullWidth?: boolean;
  inverse?: boolean;
};

export default function LanguageSwitcher({
  fullWidth = false,
  inverse = false,
}: LanguageSwitcherProps) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("LocaleSwitcher");
  const [isUpdating, setIsUpdating] = useState(false);

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
    <FormControl size="small" fullWidth={fullWidth} sx={{ minWidth: 138 }}>
      <Select
        value={locale}
        disabled={isUpdating}
        onChange={(event) => handleChange(event.target.value as AppLocale)}
        startAdornment={
          <LanguageRoundedIcon
            sx={{
              fontSize: 18,
              marginInlineEnd: "7px",
              color: inverse ? "#FFF" : "#667185",
            }}
          />
        }
        inputProps={{ "aria-label": t("label") }}
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
        }}
      >
        {localeDefinitions
          .filter(({ code }) => enabledLocales.includes(code))
          .map(({ code, nativeName }) => (
            <MenuItem key={code} value={code}>
              {nativeName}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
