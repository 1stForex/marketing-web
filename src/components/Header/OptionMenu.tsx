"use client";

import { Box, useMediaQuery } from "@mui/material";
import downloadSvg from "../../assets/icons/download.svg";
import searchSvg from "../../assets/icons/search.svg";
import loginSvg from "../../assets/icons/login.svg";
import userSvg from "../../assets/icons/user.svg";
import CustomButton from "../Button";
import Image from "next/image";
import TemporaryDrawer from "./Menu";
import { NavProps } from "@/src/types/Nav.interface";

export default function OptionMenu({ currentPath, onLinkClick }: NavProps) {
  const isSmallScreen = useMediaQuery("(max-width: 1350px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "434px",
          height: "56px",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "9px",
          flexShrink: 0,

          "@media (max-width: 1400px)": {
            width: "343px",
          },
          "@media (max-width: 1350px)": {
            width: "auto",
            flexDirection: "row-reverse",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            alignSelf: "stretch",
          }}
        >
          <Box
            sx={{
              "@media (max-width: 1350px)": {
                display: "none",
              },
            }}
          >
            <Image src={downloadSvg} alt="Download Icon" />
          </Box>
          <Image src={searchSvg} alt="Download Icon" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            alignSelf: "stretch",

            "@media (max-width: 1350px)": {
              gap: "7px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: ".5rem",
              "@media (max-width: 1350px)": {
                display: "none",
              },
            }}
          >
            <CustomButton variant="white">
              <Image src={loginSvg} alt="Logout Icon" />
              Login
            </CustomButton>
          </Box>
          <CustomButton variant="red">
            <Image
              src={userSvg}
              alt="User Icon"
              width={isVerySmallScreen ? 10 : 24}
              height={isVerySmallScreen ? 10 : 24}
            />
            Register
          </CustomButton>
        </Box>
      </Box>
      {isSmallScreen && (
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <TemporaryDrawer
            currentPath={currentPath}
            onLinkClick={onLinkClick}
          />
        </Box>
      )}
    </Box>
  );
}
