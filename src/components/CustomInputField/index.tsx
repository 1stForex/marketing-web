import React from "react";
import { Box, TextField, InputAdornment, Typography } from "@mui/material";
import Image from "next/image";
import { CustomInputFieldProps } from "@/src/types/CustomInputField.interface";

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  placeholder = "Enter text",
  icon = null,
  label = "",
  width = "100%",
  type = "text",
  padding = "16px",
  helperText,
  multiline = false,
  rows = 3,
  borderRadius = "6",
}) => {
  return (
    <Box sx={{ width: width }}>
      {label && (
        <Typography
          sx={{
            marginBottom: "4px",
            fontSize: "14px",
            fontWeight: 500,
            color: "#475367",
            lineHeight: "145%",
          }}
        >
          {label}
        </Typography>
      )}
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        type={type}
        multiline={multiline}
        rows={multiline ? rows : undefined}
        InputProps={{
          endAdornment: icon && (
            <InputAdornment position="end">
              <Image src={icon} alt="icon" width={20} height={20} />
            </InputAdornment>
          ),
        }}
        sx={{
          ".MuiOutlinedInput-root": {
            padding: padding,
            borderColor: "var(--Grey-300, #D0D5DD)",
            borderRadius: `${borderRadius}px`,
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--Primary-100, #FF9980)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--Primary-200, #F75)",
            },
          },
          ".MuiOutlinedInput-input": {
            padding: "unset",
            height: "unset",
            lineHeight: "inherit",
          },
          "input::placeholder, textarea::placeholder": {
            fontSize: "14px",
            color: " var(--Grey-400, #98A2B3)",
          },
          "textarea.MuiOutlinedInput-input": {
            resize: "none",
          },
        }}
      />
      {helperText && (
        <Typography
          sx={{
            color: "var(--Grey-500, #667185)",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "145%",
            mt: "8px",
          }}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default CustomInputField;
