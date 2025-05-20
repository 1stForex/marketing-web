import { Box, Typography } from "@mui/material";
import { linksList } from "@/src/const/allFooterLinks";
import Link from "next/link";

export default function FooterLinks() {
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
        gap: "32px",
        "@media (max-width: 576px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      {linksList.map((section, index) => {
        return (
          <Box
            key={index}
            sx={{
              width: "357px",
              "@media (max-width: 576px)": {
                width: "auto",
                textAlign: "center",
              },
            }}
          >
            <Typography
              sx={{
                ...commonStyle,
                color: "#98A2B3",
                fontWeight: 400,
                marginBottom: "24px",
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
                    marginBottom:
                      linkIndex !== section.links.length - 1 ? "16px" : 0,
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
