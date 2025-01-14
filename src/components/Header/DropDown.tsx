"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "@/src/const/allMenuItem";
import { DropDownProps } from "@/src/types/DropDown.interface";
import ChevronDown from "@/src/assets/icons/chevron-down.svg";

export default function DropDown({ currentPath, onLinkClick }: DropDownProps) {
  const isHighlighted = ["/about-us", "/contact-us"].includes(currentPath);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
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
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        disableScrollLock
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClose();
              if (item.href) {
                onLinkClick(item.href);
              }
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
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
