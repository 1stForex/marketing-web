"use client";

import { Box, useMediaQuery } from "@mui/material";
// import downloadSvg from "../../assets/icons/download.svg";
// import searchSvg from "../../assets/icons/search.svg";
import loginSvg from "../../assets/icons/login.svg";
import userSvg from "../../assets/icons/user.svg";
import CustomButton from "../Button";
import Image from "next/image";
import TemporaryDrawer from "./Menu";
import { NavProps } from "@/src/types/Nav.interface";
import { RedirectUrls } from "@/src/const/Enum";
import { openExternalUrl } from "@/src/utils/openExternalUrl";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function OptionMenu({ currentPath }: NavProps) {
  const t = useTranslations("Navigation");
  const isSmallScreen = useMediaQuery("(max-width: 1350px)");
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "590px",
          height: "56px",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "9px",
          flexShrink: 0,

          "@media (max-width: 1400px)": {
            width: "500px",
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "@media (max-width: 1350px)": { display: "none" },
              }}
            >
              <LanguageSwitcher />
            </Box>
            <CustomButton
              variant="white"
              icon={
                <Image
                  src={loginSvg}
                  alt="Logout Icon"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              }
              onClick={() => openExternalUrl(RedirectUrls.LOGIN_URL)}
            >
              {t("login")}
            </CustomButton>
          </Box>
          <CustomButton
            variant="red"
            icon={
              <Image
                src={userSvg}
                alt="User Icon"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            }
            onClick={() => openExternalUrl(RedirectUrls.REGISTER_URL)}
          >
            {t("register")}
          </CustomButton>
        </Box>
      </Box>
      {isSmallScreen && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginInlineStart: "auto",
          }}
        >
          <TemporaryDrawer currentPath={currentPath} />
        </Box>
      )}
    </Box>
  );
}
