import { Box } from "@mui/material";
import Carousel from "@/src/components/Carousel";
import { aiSignalKeyOfferings } from "@/src/const/aiSignalKeyOfferings";
import HeadTypography from "@/src/styled/HeadTypography";

export default function KeyOfferings() {
  return (
    <Box>
      <Carousel badgeTitle="Offers" cards={aiSignalKeyOfferings} isCarousel>
        <HeadTypography color="#333">
          Key{" "}
          <span style={{ color: "var(--primary-400-base, #F30)" }}>
            Offerings
          </span>
        </HeadTypography>
      </Carousel>
    </Box>
  );
}
