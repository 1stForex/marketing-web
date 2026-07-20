"use client";
import { Box, useMediaQuery } from "@mui/material";
import forexLogo from "../../assets/images/forex-logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import GroupButton from "./GroupButton";
import OptionMenu from "./OptionMenu";
import { usePathname } from "next/navigation";
import { RoutesUrls } from "@/src/const/Enum";
import { useLocale } from "next-intl";

const DEFAULT_COMPACT_BREAKPOINT = 1599;
const FRENCH_COMPACT_BREAKPOINT = 1799;

export default function Header() {
  const currentPath = usePathname() as RoutesUrls;
  const locale = useLocale();
  const compactBreakpoint =
    locale === "fr-CA"
      ? FRENCH_COMPACT_BREAKPOINT
      : DEFAULT_COMPACT_BREAKPOINT;
  const isCompact = useMediaQuery(`(max-width: ${compactBreakpoint}px)`);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 40px",
        marginBottom: "30px",

        "@media (max-width: 1400px)": {
          padding: "0 20px",
        },

        "@media (max-width: 768px)": {
          padding: "0 16px",
          marginBottom: "15px",
          overflowX: "hidden",
        },
        "@media (max-width: 576px)": {
          marginBottom: "0px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "24px 0",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          alignSelf: "stretch",
          "@media (max-width: 576px)": {
            padding: "18px 0",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            gap: "12px",
          }}
        >
          <Box
            component={Link}
            href="/home"
            sx={{ display: "flex", flexShrink: 0 }}
          >
            <Image
              src={forexLogo}
              alt="Forex Logo"
              loading="lazy"
              width={122}
              height={24}
            />
          </Box>
          {!isCompact && (
            <Box sx={{ flexShrink: 0 }}>
              <GroupButton currentPath={currentPath} />
            </Box>
          )}
          {!isCompact && (
            <Box sx={{ flexShrink: 0 }}>
              <NavLinks currentPath={currentPath} />
            </Box>
          )}
          <OptionMenu currentPath={currentPath} compact={isCompact} />
        </Box>
      </Box>
    </Box>
  );
}
