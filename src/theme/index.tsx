"use client";
import { createTheme } from "@mui/material";
import type { TextDirection } from "@/src/i18n/config";

const createAppTheme = (direction: TextDirection = "ltr") => createTheme({
  direction,
  typography: {
    fontFamily: "Montserrat",
  },
});

export default createAppTheme;
