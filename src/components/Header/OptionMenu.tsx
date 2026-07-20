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
  const isSmallScreen = useMediaQuery("(max-width: 1599px)");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "auto",
          height: "56px",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "9px",
          flexShrink: 0,

          "@media (max-width: 1599px)": {
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

            "@media (max-width: 1599px)": {
              gap: "7px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: ".5rem",
              "@media (max-width: 1599px)": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "@media (max-width: 1599px)": { display: "none" },
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
          <Box
            sx={{
              "@media (max-width: 360px)": {
                "& .register-label": { display: "none" },
              },
            }}
          >
            <CustomButton
              ariaLabel={t("register")}
              variant="red"
              icon={
                <Image
                  src={userSvg}
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              }
              onClick={() => openExternalUrl(RedirectUrls.REGISTER_URL)}
            >
              <Box component="span" className="register-label">
                {t("register")}
              </Box>
            </CustomButton>
          </Box>
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
          <LanguageSwitcher compact />
        </Box>
      )}
      {isSmallScreen && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TemporaryDrawer currentPath={currentPath} />
        </Box>
      )}
    </Box>
  );
}
