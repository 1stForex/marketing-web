import { Box } from "@mui/material";
import { socialMedia } from "@/src/const/allNavSocialMedia";
import Image from "next/image";

export default function SocialMediaLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        padding: "0 15px",
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
            width: "40px",
            height: "40px",
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
          <Image src={social.icon} alt={`${social.name} icon`} />
        </Box>
      ))}
    </Box>
  );
}
