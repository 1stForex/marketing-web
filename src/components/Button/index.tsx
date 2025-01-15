"use client";

import React from "react";
import { Button, styled, Box } from "@mui/material";

export interface ButtonProps {
  variant?: "red" | "white" | "transparent" | "topic" | "black";
  fontWeight?: string;
  gap?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  width?: string;
  height?: string;
  icon?: React.ReactNode;
  borderRadius?: string;
  type?: "button" | "submit" | "reset";
}

const StyledButton = styled(Button)<{
  varianttype: "red" | "white" | "transparent" | "topic" | "black";
  fontWeight: string;
  padding?: string;
  fontSize?: string;
}>(({ theme, varianttype, fontWeight, padding, fontSize }) => ({
  textTransform: "none",
  fontWeight: fontWeight,
  display: "flex",
  alignItems: "center",
  gap: "10px",
  lineHeight: "1.2",
  padding: padding || "16px 24px",
  fontSize: fontSize || "16px",
  textWrap: "nowrap",
  ...(varianttype === "red"
    ? {
        backgroundColor: "#F30",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#D52B00",
        },
        "&:disabled": {
          backgroundColor: "#D0D5DD",
          color: "#FFF",
        },
      }
    : varianttype === "white"
    ? {
        backgroundColor: "#FFF",
        color: "#333",
        border: "1px solid #D0D5DD",
        "&:hover": {
          backgroundColor: "#D0D5DD",
        },
        "&:disabled": {
          backgroundColor: "#F7F1C3",
          color: "#333",
        },
      }
    : varianttype === "transparent"
    ? {
        backgroundColor: "transparent",
        color: "#FFF",
        boxShadow: "inset 0 0 0 1px #FFF",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
        "&:disabled": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          color: theme.palette.action.disabled,
        },
      }
    : varianttype === "topic"
    ? {
        backgroundColor: "#FFF",
        color: "#333",
        border: "1px solid var(--Grey-900, #333)",
        "&:hover": {
          backgroundColor: "#D0D5DD",
        },
        "&:disabled": {
          backgroundColor: "#F7F1C3",
          color: "#333",
        },
      }
    : varianttype === "black"
    ? {
        backgroundColor: "#333",
        color: "#FFF",
        "&:hover": {
          backgroundColor: "#3a3a3a",
        },
        "&:disabled": {
          backgroundColor: "#D0D5DD",
        },
      }
    : {
        backgroundColor: "#FFFFFF",
        color: theme.palette.grey[700],
        border: `1px solid ${theme.palette.grey[300]}`,
        "&:hover": {
          backgroundColor: "#F5F5F5",
        },
        "&:disabled": {
          color: theme.palette.action.disabled,
          border: `1px solid ${theme.palette.action.disabledBackground}`,
        },
      }),
  "@media (max-width: 576px)": {
    padding: "8px 16px",
    fontSize: "14px",
  },
}));

const CustomButton: React.FC<ButtonProps> = ({
  variant = "red",
  onClick,
  gap = "8px",
  disabled = false,
  children,
  width = "auto",
  height = "auto",
  icon = null,
  fontWeight = "600",
  borderRadius = "32px",
  type = "button",
}) => (
  <StyledButton
    style={{ width, height, borderRadius }}
    onClick={onClick}
    varianttype={variant}
    disabled={disabled}
    fontWeight={fontWeight}
    type={type}
  >
    {icon && (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap,
          height: "16px",
          width: "16px",

          "@media (max-width: 576px)": {
            height: "14px",
            width: "14px",
          },
        }}
      >
        {icon}
      </Box>
    )}
    {children}
  </StyledButton>
);

export default CustomButton;
