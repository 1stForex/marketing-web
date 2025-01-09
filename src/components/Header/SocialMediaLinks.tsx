import facebookSvg from "../../assets/icons/facebook.svg";
import linkedinSvg from "../../assets/icons/linkedin.svg";
import twitterSvg from "../../assets/icons/twitter.svg";
import instagramSvg from "../../assets/icons/instagram.svg";
import { Box } from "@mui/material";
import Image from "next/image";

interface SocialLinksProps {
  nav?: boolean;
}

export default function SocialMediaLinks({ nav = false }: SocialLinksProps) {
  const socialMedia = [
    {
      name: "facebook",
      icon: facebookSvg,
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
      href: "#",
    },
    {
      name: "twitter",
      icon: twitterSvg,
      href: "#",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        justifyContent: nav ? "center" : "flex-start",
        flexWrap: "wrap",
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
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={social.icon}
            alt={`${social.name} icon`}
            width={24}
            height={24}
          />
        </Box>
      ))}
    </Box>
  );
}
