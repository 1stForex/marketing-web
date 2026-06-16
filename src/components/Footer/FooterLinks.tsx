import Link from "next/link";
import { Box } from "@mui/material";
import StyledTypography from "./StyledTypography";
import { linksList } from "@/src/const/allFooterLinks";

export default function FooterLinks() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "32px",
        "@media (max-width: 768px)": {
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "28px",
        },
        "@media (max-width: 576px)": {
          gridTemplateColumns: "1fr",
          alignItems: "center",
          gap: "24px",
        },
      }}
    >
      {linksList.map((section, index) => {
        return (
          <Box
            key={index}
            sx={{
              minWidth: 0,
              "@media (max-width: 576px)": {
                width: "100%",
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
                    py: "2px",
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
