import OptionCard from "@/src/components/OptionCard";
import { AdvertiseCardProps } from "@/src/types/AdvertiseCard.interface";
import { Box, Typography } from "@mui/material";

export default function AdvertiseCard({
  title,
  specialText,
  cardInfo,
  index = 0,
  animated = false,
  setCardRef,
}: AdvertiseCardProps) {
  return (
    <Box
      ref={(element: HTMLDivElement | null) => setCardRef?.(element, index)}
      className="advertise-card"
      sx={{
        ...(animated && {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: index + 1,
          transformOrigin: "top center",
        }),
        borderRadius: "32px",
        background: "#F9FAFB",
        boxShadow: "0px -10px 18px -2px rgba(16, 25, 40, 0.17)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: "64px 63px",

          "@media (max-width: 992px)": {
            padding: "44px 43px",
          },

          "@media (max-width: 768px)": {
            padding: "24px 23px",
          },

          "@media (max-width: 576px)": {
            padding: "22px",
          },

          "@media (max-width: 780px)": {
            gap: "21px",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#333",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "33.6px",
              letterSpacing: "-0.56px",
              width: "300px",

              "@media (max-width: 780px)": {
                fontSize: "24px",
                lineHeight: "29px",
                width: "auto",
              },

              "@media (max-width: 576px)": {
                fontSize: "20px",
                lineHeight: "25px",
                width: "auto",
              },
            }}
          >
            {title} <span style={{ color: "#F30" }}>{specialText}</span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",

            "@media (max-width: 768px)": {
              flexDirection: "column",
              gap: "14px",
            },
          }}
        >
          {cardInfo.map((item, index) => (
            <OptionCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
