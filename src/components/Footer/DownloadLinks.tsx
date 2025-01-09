"use client";

import SocialLinks from "../SocialLinks";
import appleStore from "../../assets/images/apple-store.png";
import googlePlay from "../../assets/images/google-play.png";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

export default function DownloadLinks() {
  const isMobile = useMediaQuery(`(max-width: 680px)`);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "24px" : "40px",
        }}
      >
        <SocialLinks justifyContent={isMobile ? "center" : "flex-end"} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <Box component={Link} href="#">
            <Image src={googlePlay} alt="Google Play Button" height={35} />
          </Box>
          <Box component={Link} href="#">
            <Image src={appleStore} alt="Apple Store Button" height={35} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
