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

const MOBILE_NAV_BREAKPOINT = 1299;
const DENSE_DESKTOP_BREAKPOINT = 1799;

export default function Header() {
  const currentPath = usePathname() as RoutesUrls;
  const isMobileNav = useMediaQuery(`(max-width: ${MOBILE_NAV_BREAKPOINT}px)`);
  const isDenseDesktop = useMediaQuery(
    `(min-width: ${MOBILE_NAV_BREAKPOINT + 1}px) and (max-width: ${DENSE_DESKTOP_BREAKPOINT}px)`,
  );

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

        "@media (max-width: 1599px)": {
          padding: "0 24px",
        },

        "@media (max-width: 1399px)": {
          padding: "0 16px",
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
          data-testid="marketing-header-row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            gap: isDenseDesktop ? "8px" : "12px",
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
              width={isDenseDesktop ? 108 : 122}
              height={24}
              style={{ height: "auto" }}
            />
          </Box>
          {!isMobileNav && (
            <Box sx={{ flexShrink: 0 }}>
              <GroupButton
                currentPath={currentPath}
                dense={isDenseDesktop}
              />
            </Box>
          )}
          {!isMobileNav && (
            <Box sx={{ flexShrink: 1, minWidth: 0 }}>
              <NavLinks currentPath={currentPath} dense={isDenseDesktop} />
            </Box>
          )}
          <OptionMenu
            currentPath={currentPath}
            compact={isMobileNav}
            dense={isDenseDesktop}
          />
        </Box>
      </Box>
    </Box>
  );
}
