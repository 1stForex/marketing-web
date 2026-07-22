import { Box, Typography } from "@mui/material";
import Link from "next/link";
import DropDown from "./DropDown";
import { links } from "@/src/const/allNavLinks";
import { additionalLinks } from "@/src/const/allAdditionalNavLinks";
import { NavProps } from "@/src/types/Nav.interface";
import { useTranslations } from "next-intl";

type NavLinksProps = NavProps & {
  dense?: boolean;
};

export default function NavLinks({
  currentPath,
  nav = false,
  dense = false,
}: NavLinksProps) {
  const t = useTranslations("Navigation");
  const color = nav ? "#FFF" : "#333";
  const isActive = (href: string) => currentPath === href;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: nav ? "" : "center",
        gap: dense && !nav ? "12px" : "18px",
        alignSelf: "stretch",
        flexDirection: nav ? "column" : "row",
        whiteSpace: nav ? "normal" : "nowrap",
      }}
    >
      {links.map((link) => (
        <Link key={link.key} href={link.href} className="link" passHref>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: dense && !nav ? "13px" : "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: dense && !nav ? "19px" : "23.2px",
              color: isActive(link.href) ? "#F30" : color,
              textDecoration: isActive(link.href) ? "underline" : "none",
            }}
          >
            {t(link.key)}
          </Typography>
        </Link>
      ))}

      {!nav ? (
        <DropDown currentPath={currentPath} dense={dense} />
      ) : (
        additionalLinks.map((link) => (
          <Link key={link.key} href={link.href} className="link">
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
            >
              {t(link.key)}
            </Typography>
          </Link>
        ))
      )}
    </Box>
  );
}
