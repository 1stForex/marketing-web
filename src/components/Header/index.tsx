"use client";
import { Box } from "@mui/material";
import forexLogo from "../../assets/images/forex-logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import GroupButton from "./GroupButton";
import OptionMenu from "./OptionMenu";
import { usePathname } from "next/navigation";
import { RoutesUrls } from "@/src/const/Enum";

export default function Header() {
  const currentPath = usePathname() as RoutesUrls;

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
          }}
        >
          <Link href="/home">
            <Image
              src={forexLogo}
              alt="Forex Logo"
              loading="lazy"
              width={122}
              height={24}
            />
          </Link>
          <Box
            sx={{
              "@media (max-width: 1350px)": {
                display: "none",
              },
            }}
          >
            <GroupButton currentPath={currentPath} />
          </Box>
          <Box
            sx={{
              "@media (max-width: 1350px)": {
                display: "none",
              },
            }}
          >
            <NavLinks currentPath={currentPath} />
          </Box>
          <OptionMenu currentPath={currentPath} />
        </Box>
      </Box>
    </Box>
  );
}
