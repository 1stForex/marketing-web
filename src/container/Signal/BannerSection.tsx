import { Box, Typography } from "@mui/material";
import Banner from "@/src/components/Banner";

export default function BannerSection() {
  return (
    <Box
      sx={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('/HomeHeroBg.jpg')`,
        boxShadow: "0px 10px 18px -2px rgba(16, 25, 40, 0.07)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mt: "-200px",
        "@media (max-width: 768px)": {
          mt: "-200px",
        },

        "@media (max-width: 640px)": {
          mt: "-150px",
        },
        "@media (max-width: 477px)": {
          mt: "-100px",
        },
        "@media (max-width: 422px)": {
          mt: "-10px",
        },
      }}
    >
      <Banner description='"Just imagine having twenty years of proven market expertise and seasoned traders at your side —instantly accessible and enhanced by cutting-edge AI guidance. It’s like placing an entire professional trading firm in the palm of your hand, offering real-time analysis, insights, and strategic support whenever you need it. Experience a new level of confidence and control in every trade."'>
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "28.8px",
            letterSpacing: "-0.48px",

            "@media (max-width: 768px)": {
              fontSize: "20px",
              lineHeight: "145%",
              letterSpacing: "-0.20px",
            },

            "@media (max-width: 576px)": {
              fontSize: "16px",
              lineHeight: "135%",
            },
          }}
        >
          With 1st Forex AI Signal, you’re not just receiving signals—you’re
          stepping into a fully supported, data-driven, and user-centric trading
          ecosystem designed to help you grow, succeed, and achieve your
          financial goals.
        </Typography>
      </Banner>
    </Box>
  );
}
