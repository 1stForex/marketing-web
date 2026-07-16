import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import menuSvg from "../../assets/icons/menu.svg";
import Image from "next/image";
import crossSvg from "../../assets/icons/cross.svg";
import GroupButton from "./GroupButton";
import NavLinks from "./NavLinks";
import CustomButton from "../Button";
import userSvg from "../../assets/icons/user.svg";
import loginSvg from "../../assets/icons/login-color.svg";
import { ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import appleStore from "../../assets/images/apple-store.png";
import googlePlay from "../../assets/images/google-play.png";
import SocialMediaLinks from "./SocialMediaLinks";
import { NavProps } from "@/src/types/Nav.interface";
import { RedirectUrls } from "@/src/const/Enum";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { getLocaleDirection } from "@/src/i18n/config";

export default function TemporaryDrawer({ currentPath }: NavProps) {
  const [open, setOpen] = React.useState(false);
  const locale = useLocale();
  const t = useTranslations("Navigation");
  const direction = getLocaleDirection(locale);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: "452px",
        height: "auto",
        minHeight: "100vh",
        background: "#333",
        boxShadow: "0px 32px 54px -12px rgba(16, 25, 40, 0.18)",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        overflow: "scroll",

        "@media (max-width: 768px)": {
          width: "100vw",
        },
      }}
      role="navigation"
      aria-label={t("menu")}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: ".5rem",
          }}
        >
          <List
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <ListItem
              sx={{
                width: "auto",
                padding: "0",
              }}
            >
              <ListItemButton
                onClick={toggleDrawer(false)}
                sx={{
                  padding: "0",
                }}
              >
                <Image src={crossSvg} alt={t("closeMenu")} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box>
          <List>
            <ListItem
              sx={{
                justifyContent: "center",
              }}
            >
              <Box>
                <GroupButton currentPath={currentPath} nav={true} />
              </Box>
            </ListItem>
          </List>
        </Box>
        <Box>
          <List>
            <ListItem>
              <NavLinks currentPath={currentPath} nav={true} />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ padding: "8px 16px 16px" }}>
          <LanguageSwitcher fullWidth inverse />
        </Box>
      </Box>
      <Box>
        <Box>
          <List>
            <ListItem
              sx={{
                padding: "0",
              }}
            >
              <ListItemButton
                component="a"
                href={RedirectUrls.REGISTER_URL}
              >
                <CustomButton
                  variant="red"
                  width="100%"
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
                >
                  {t("register")}
                </CustomButton>
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                padding: "0",
              }}
            >
              <ListItemButton
                component="a"
                href={RedirectUrls.LOGIN_URL}
              >
                <CustomButton
                  variant="transparent"
                  width="100%"
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
                >
                  {t("login")}
                </CustomButton>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider
          variant="middle"
          sx={{
            borderColor: "#F0F2F5",
          }}
        />
        <Box>
          <List
            sx={{
              padding: 0,
            }}
          >
            <ListItem>
              <ListItemText>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "23.2px",
                  }}
                >
                  {t("tradeLikeAPro")}
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <List
            sx={{
              display: "flex",
              padding: 0,
            }}
          >
            <ListItem
              sx={{
                width: "auto",
                height: "auto",
              }}
            >
              <Box
                component={Link}
                href="#"
                sx={{
                  width: "122px",
                  height: "36px",
                }}
              >
                <Image
                  src={googlePlay}
                  alt="Google Play Button"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </ListItem>
            <ListItem
              sx={{
                width: "auto",
                height: "auto",
              }}
            >
              <Box
                component={Link}
                href="#"
                sx={{
                  width: "122px",
                  height: "36px",
                }}
              >
                <Image
                  src={appleStore}
                  alt="Apple Store Button"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </ListItem>
          </List>
        </Box>
        <Divider
          variant="middle"
          sx={{
            borderColor: "#F0F2F5",
            my: "8px",
          }}
        />
        <Box>
          <List>
            <SocialMediaLinks />
          </List>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          minWidth: "45px",
        }}
      >
        <Image src={menuSvg} alt={t("menu")} />
      </Button>
      <Drawer
        anchor={direction === "rtl" ? "left" : "right"}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
