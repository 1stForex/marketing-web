"use client";

import { Box } from "@mui/material";
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

type OptionMenuProps = NavProps & {
  compact: boolean;
  dense: boolean;
};

export default function OptionMenu({
  currentPath,
  compact,
  dense,
}: OptionMenuProps) {
  const t = useTranslations("Navigation");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: dense ? "5px" : "7px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "auto",
          height: "56px",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: dense ? "6px" : "9px",
          flexShrink: 0,
          flexDirection: compact ? "row-reverse" : "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: dense ? "6px" : "12px",
            alignSelf: "stretch",
            ...(compact && { gap: "7px" }),
            ...(dense && {
              "& .MuiButton-root": {
                padding: "11px 14px",
                fontSize: "13px",
                gap: "7px",
              },
            }),
          }}
        >
          {!compact && (
            <Box
              sx={{
                display: "flex",
                gap: dense ? "6px" : ".5rem",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LanguageSwitcher dense={dense} />
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
          )}
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
      {compact && (
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
      {compact && (
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
