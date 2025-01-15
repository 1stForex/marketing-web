import { Box, Typography } from "@mui/material";
import Carousel from "@/src/components/Carousel";
import { aiSignalKeyOfferings } from "@/src/const/aiSignalKeyOfferings";

export default function KeyOfferings() {
  return (
    <Box>
      <Carousel badgeTitle="Offers" cards={aiSignalKeyOfferings} isCarousel>
        <Typography
          sx={{
            color: "var(--Grey-900, #333)",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "-1.92px",
            "@media (max-width: 768px)": {
              fontSize: "40px",
              letterSpacing: "-1.28px",
            },
            "@media (max-width: 576px)": {
              fontSize: "32px",
              letterSpacing: "-0.64px",
            },
          }}
        >
          Key{" "}
          <span style={{ color: "var(--primary-400-base, #F30)" }}>
            Offerings
          </span>
        </Typography>
      </Carousel>
    </Box>
  );
}
