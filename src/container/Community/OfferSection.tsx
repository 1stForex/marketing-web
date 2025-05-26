import { Box } from "@mui/material";
import Badge from "@/src/components/Badge";
import OptionCard from "@/src/components/OptionCard";
import { communityOffer } from "@/src/const/communityOffer";
import HeadTypography from "@/src/styled/HeadTypography";

export default function OfferSection() {
  return (
    <Box
      sx={{
        padding: "64px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "32px",
        gap: "32px",
        background: "#F9FAFB",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
        "@media (max-width: 992px)": {
          padding: "36px",
          gap: "28px",
        },

        "@media (max-width: 576px)": {
          padding: "20px 16px",
          gap: "16px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "32px",

          "@media (max-width: 768px)": {
            gap: "28px",
          },
          "@media (max-width: 576px)": {
            gap: "16px",
          },
        }}
      >
        <Badge title="Community" />
        <HeadTypography textAlign={"center"} maxWidth={"734px"}>
          What <span style={{ color: "#F30" }}>We Offer?</span>
        </HeadTypography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",

          "@media (max-width: 992px)": {
            flexDirection: "column",
            gap: "18px",
          },
        }}
      >
        {communityOffer.map((item, index) => (
          <OptionCard
            key={index}
            icon={item.icon}
            title={item.title}
            points={item.points}
          />
        ))}
      </Box>
    </Box>
  );
}
