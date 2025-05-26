import Link from "next/link";
import { Box } from "@mui/material";
import StyledTypography from "./StyledTypography";
import { linksList } from "@/src/const/allFooterLinks";

export default function FooterLinks() {
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
            <StyledTypography
              sx={{
                color: "#98A2B3",
                marginBottom: "24px",
              }}
            >
              {section.label}
            </StyledTypography>
            {section.links.map((link, linkIndex) => (
              <Link key={linkIndex} href={link.href} passHref>
                <StyledTypography
                  sx={{
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
                </StyledTypography>
              </Link>
            ))}
          </Box>
        );
      })}
    </Box>
  );
}
