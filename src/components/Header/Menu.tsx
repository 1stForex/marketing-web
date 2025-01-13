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
import searchSvg from "../../assets/icons/search-white.svg";
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

export default function TemporaryDrawer({
  currentPath,
  onLinkClick,
}: NavProps) {
  const [open, setOpen] = React.useState(false);

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
      role="presentation"
      onClick={toggleDrawer(false)}
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
            }}
          >
            <ListItem
              sx={{
                width: "auto",
                padding: "0",
              }}
            >
              <ListItemButton
                sx={{
                  padding: "5px",
                }}
              >
                <Image src={searchSvg} alt="Search Icon" />
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                width: "auto",
                padding: "0",
              }}
            >
              <ListItemButton
                onClick={toggleDrawer(false)}
                sx={{
                  padding: "5px",
                }}
              >
                <Image src={crossSvg} alt="Cross Icon" />
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
                <GroupButton
                  currentPath={currentPath}
                  onLinkClick={onLinkClick}
                  nav={true}
                />
              </Box>
            </ListItem>
          </List>
        </Box>
        <Box>
          <List>
            <ListItem>
              <NavLinks
                currentPath={currentPath}
                onLinkClick={onLinkClick}
                nav={true}
              />
            </ListItem>
          </List>
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
              <ListItemButton>
                <CustomButton variant="red" width="100%">
                  <Image src={userSvg} alt="User Icon" />
                  Register
                </CustomButton>
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                padding: "0",
              }}
            >
              <ListItemButton>
                <CustomButton variant="transparent" width="100%">
                  <Image src={loginSvg} alt="Logout Icon" />
                  Login
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
                  Trade Like a pro
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
        <Image src={menuSvg} alt="Menu Icon" />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
