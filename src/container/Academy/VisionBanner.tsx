import { Box } from "@mui/material";
import Banner from "@/src/components/Banner";
import HeadTypography from "@/src/styled/HeadTypography";

const VisionBanner = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('/HomeHeroBg.jpg')`,
        boxShadow: "0px 10px 18px -2px rgba(16, 25, 40, 0.07)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Banner
        badgeTitle="Vision"
        description="To make forex education affordable, effective, and accessible to traders worldwide. By combining our proven teaching methods with innovative AI technology, we aim to build a thriving community of successful traders equipped with both knowledge and cutting-edge tools to excel in the markets."
      >
        <HeadTypography color="#FFF" textAlign={"center"}>
          Our Vision
        </HeadTypography>
      </Banner>
    </Box>
  );
};

export default VisionBanner;
