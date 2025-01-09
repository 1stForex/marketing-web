"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Company", href: null, isBold: true },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

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
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "23.2px",
          color: "#333",
          fontFamily: "inherit",

          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "none",
          },
        }}
      >
        Company
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
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
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
                    fontFamily: "inherit",
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
                  fontFamily: "inherit",
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
