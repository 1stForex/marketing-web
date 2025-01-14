import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { OptionCardProp } from "@/src/types/OptionCard.interface";

export default function OptionCard({
  icon,
  title,
  description,
  fixedSize = false,
}: OptionCardProp) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
        background: "#FFF",
        borderRadius: "16px",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02);",
        ...(fixedSize
          ? {
              height: "200px",
              width: "100%",
              maxWidth: "533px",
            }
          : {
              flexBasis: "45%",
              flexGrow: 1,
            }),
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "10px",
          alignItems: "center",
          gap: "10px",
          borderRadius: "8px",
          background: "#F30",
        }}
      >
        <Image src={icon} alt="Option card Icon" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",

          "@media (max-width: 992px)": {
            gap: "2px",
          },
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.4px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#1D2739",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "19.2px",
            letterSpacing: "-0.32px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
