"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "@/src/const/allMenuItem";
import { DropDownProps } from "@/src/types/DropDown.interface";
import ChevronDown from "@/src/assets/icons/chevron-down.svg";
import { RoutesUrls } from "@/src/const/Enum";

export default function DropDown({ currentPath }: DropDownProps) {
  const isHighlighted = [RoutesUrls.ABOUT_US, RoutesUrls.CONTACT_US].includes(
    currentPath
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAnchorEl(null);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "relative",
      }}
    >
      <Button
        onClick={handleClick}
        variant="text"
        sx={{
          padding: 0,
          minWidth: 0,
          textTransform: "none",
          textAlign: "center",
          display: "flex",
          gap: "8px",

          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "none",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "23.2px",
            color: isHighlighted ? "#F30" : "#333",
            textDecoration: isHighlighted ? "underline" : "none",
          }}
        >
          Company
        </Typography>
        <Image src={ChevronDown} alt="Chevron Down Icon" />
      </Button>
      {open && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            background: "#FFF",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            zIndex: "1",
            borderRadius: "8px",
          }}
        >
          {menuItems.map((item, index) => (
            <Box
              key={index}
              onClick={() => {
                handleClose();
              }}
              sx={{
                display: "flex",
                padding: "8px 16px",
                alignItems: "center",
                gap: "4px",
                alignSelf: "stretch",
                width: item.href === null ? "267px" : "auto",
              }}
            >
              {item.href ? (
                <Link href={item.href}>
                  <Typography
                    sx={{
                      color: "#333",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: item.isBold ? "600" : "400",
                      lineHeight: "20.3px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  sx={{
                    color: "#333",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: item.isBold ? "600" : "400",
                    lineHeight: "20.3px",
                  }}
                >
                  {item.label}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
}
