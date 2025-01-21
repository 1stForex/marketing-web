"use client";
import { Box } from "@mui/material";
import forexLogo from "../../assets/images/forex-logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import GroupButton from "./GroupButton";
import OptionMenu from "./OptionMenu";
import { useState, useEffect } from "react";

export default function Header() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setCurrentPath(href);
  };

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
              onClick={() => handleLinkClick("/home")}
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
            <GroupButton
              currentPath={currentPath}
              onLinkClick={handleLinkClick}
            />
          </Box>
          <Box
            sx={{
              "@media (max-width: 1350px)": {
                display: "none",
              },
            }}
          >
            <NavLinks currentPath={currentPath} onLinkClick={handleLinkClick} />
          </Box>
          <OptionMenu currentPath={currentPath} onLinkClick={handleLinkClick} />
        </Box>
      </Box>
    </Box>
  );
}
