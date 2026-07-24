"use client";
import { createTheme } from "@mui/material";
import type { TextDirection } from "@/src/i18n/config";

const createAppTheme = (direction: TextDirection = "ltr") => createTheme({
  direction,
  typography: {
    fontFamily:
      direction === "rtl"
        ? "var(--font-noto-arabic), Arial, sans-serif"
        : "var(--font-montserrat), Montserrat, Arial, sans-serif",
  },
});

export default createAppTheme;
