"use client";

import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

export default function FooterLinks() {
  const linksList = [
    {
      label: "Product",
      links: [
        {
          label: "Editor",
          href: "#",
        },
        {
          label: "Runtimes",
          href: "#",
        },
        {
          label: "Rendered",
          href: "#",
        },
        {
          label: "Changelog",
          href: "#",
        },
      ],
    },
    {
      label: "Community",
      links: [
        {
          label: "Rayna Club",
          href: "#",
        },
        {
          label: "Discord",
          href: "#",
        },
        {
          label: "Get Support",
          href: "#",
        },
      ],
    },
    {
      label: "Learn",
      links: [
        {
          label: "Documentation",
          href: "#",
        },
        {
          label: "Blog",
          href: "#",
        },
        {
          label: "Features",
          href: "#",
        },
      ],
    },
    {
      label: "Use Cases",
      links: [
        {
          label: "Game Design",
          href: "#",
        },
        {
          label: "Product Design",
          href: "#",
        },
        {
          label: "Pro",
          href: "#",
        },
      ],
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(510));

  const commonStyle = {
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "23.2px",
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: isSmallScreen ? "space-around" : "space-between",
        gap: "24px",
      }}
    >
      {linksList.map((section, index) => {
        if (
          isSmallScreen &&
          (section.label === "Learn" || section.label === "Use Cases")
        ) {
          return null;
        }

        return (
          <Box key={index}>
            <Typography
              sx={{
                ...commonStyle,
                color: "#98A2B3",
                fontWeight: 400,
                marginBottom: "12px",
                fontFamily: "inherit",
              }}
            >
              {section.label}
            </Typography>
            {section.links.map((link, linkIndex) => (
              <Link key={linkIndex} href={link.href} passHref>
                <Typography
                  sx={{
                    ...commonStyle,
                    display: "block",
                    color: "#667185",
                    fontWeight: 500,
                    marginBottom: "8px",
                    textDecoration: "none",
                    "&:hover": { color: "#333" },
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </Box>
        );
      })}
    </Box>
  );
}
