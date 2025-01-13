import OptionCard from "@/src/components/OptionCard";
import { AdvertiseCardProps } from "@/src/types/AdvertiseCard.interface";
import { Box, Typography } from "@mui/material";

export default function AdvertiseCard({
  title,
  specialText,
  cardInfo,
}: AdvertiseCardProps) {
  return (
    <Box
      className="advertise-card"
      sx={{
        padding: "64px 63px",
        borderRadius: "32px",
        background: "#F9FAFB",
        boxShadow: "0px 10px 18px -2px rgba(16, 25, 40, 0.07);",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
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
