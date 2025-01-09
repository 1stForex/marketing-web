import { Box, Typography } from "@mui/material";
import Link from "next/link";
import DropDown from "./DropDown";

interface NavLinksProps {
  nav?: boolean;
}

export default function NavLinks({ nav = false }: NavLinksProps) {
  const color = nav ? "#FFF" : "#333";

  const links = [
    { label: "Home", href: "#" },
    { label: "Community", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  const additionalLinks = [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

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
        <Link key={link.label} href={link.href} className="link">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "23.2px",
              color,
              fontFamily: "inherit",
            }}
          >
            {link.label}
          </Typography>
        </Link>
      ))}

      {!nav ? (
        <DropDown />
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
                color,
                fontFamily: "inherit",
              }}
            >
              {link.label}
            </Typography>
          </Link>
        ))
      )}
    </Box>
  );
}
