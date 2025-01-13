"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import DropDown from "./DropDown";
import { NavProps } from "@/src/types/Nav.interface";
import { links } from "@/src/const/allNavLinks";
import { additionalLinks } from "@/src/const/allAdditionalNavLinks";
import { useEffect, useState } from "react";

export default function NavLinks({ nav = false }: NavProps) {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const color = nav ? "#FFF" : "#333";
  const isActive = (href: string) => currentPath === href;

  const handleLinkClick = (href: string, fromDropdown: boolean = false) => {
    setCurrentPath(fromDropdown ? "" : href);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: nav ? "" : "center",
        gap: "18px",
        alignSelf: "stretch",
        flexDirection: nav ? "column" : "row",

        "@media (max-width: 1330px)": {
          gap: "24px",
        },
      }}
    >
      {links.map((link) => (
        <Link key={link.label} href={link.href} className="link" passHref>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "23.2px",
              color: isActive(link.href) ? "#F30" : color,
              textDecoration: isActive(link.href) ? "underline" : "none",
            }}
            onClick={() => handleLinkClick(link.href)}
          >
            {link.label}
          </Typography>
        </Link>
      ))}

      {!nav ? (
        <DropDown onLinkClick={(href: string) => handleLinkClick(href, true)} />
      ) : (
        additionalLinks.map((link) => (
          <Link key={link.label} href={link.href} className="link">
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "23.2px",
                color: isActive(link.href) ? "#F30" : color,
                textDecoration: isActive(link.href) ? "underline" : "none",
              }}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </Typography>
          </Link>
        ))
      )}
    </Box>
  );
}
