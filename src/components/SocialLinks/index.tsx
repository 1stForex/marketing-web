"use client";

import facebookSvg from "../../assets/icons/facebook-color.svg";
import linkedinSvg from "../../assets/icons/linkedin-color.svg";
import XSvg from "../../assets/icons/x-color.svg";
import instagramSvg from "../../assets/icons/instagram-color.svg";
import { Box } from "@mui/material";
import Image from "next/image";
import { SocialLinksProps } from "@/src/types/SocialLink.interface";

export default function SocialLinks({ justifyContent }: SocialLinksProps) {
  const socialMedia = [
    {
      name: "facebook",
      icon: facebookSvg,
      href: "#",
    },
    {
      name: "X",
      icon: XSvg,
      href: "#",
    },
    {
      name: "linkedin",
      icon: linkedinSvg,
      href: "#",
    },
    {
      name: "instagram",
      icon: instagramSvg,
      href: "https://www.instagram.com/1stforex?igsh=ejI0cDdjNjhkOWF3&utm_source=qr",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        justifyContent: justifyContent,
        "@media (max-width: 768px)": {
          gap: "6px",
        },
      }}
    >
      {socialMedia.map((social, index) => (
        <Box
          key={index}
          component="a"
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },

            "@media (max-width: 768px)": {
              width: "35px",
              height: "35px",
            },
          }}
        >
          <Image
            src={social.icon}
            alt={`${social.name} icon`}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
