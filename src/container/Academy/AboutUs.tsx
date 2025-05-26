import { Box, Typography } from "@mui/material";
import Badge from "@/src/components/Badge";
import CourseLaptop from "@/src/assets/images/course.png";
import Image from "next/image";

const AboutUs = () => {
  const typographyStyle = {
    color: "#000",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "-0.4px",

    "@media (max-width: 768px)": {
      fontSize: "18px",
      textAlign: "center",
    },

    "@media (max-width: 576px)": {
      fontSize: "16px",
    },
  };
  return (
    <Box
      sx={{
        padding: "60px 0 60px 60px",
        display: "flex",
        alignItems: "center",
        gap: "28px",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "-5px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",

        "@media (max-width: 992px)": {
          padding: "40px",
        },

        "@media (max-width: 768px)": {
          padding: "30px",
        },

        "@media (max-width: 576px)": {
          padding: "0px",
        },
      }}
    >
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",

          "@media (max-width: 992px)": {
            width: "auto",
            alignItems: "center",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Badge title="Offers" />
        </Box>

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
              textAlign: "center",
            },
            "@media (max-width: 576px)": {
              fontSize: "26px",
              letterSpacing: "-0.64px",
            },
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            ...typographyStyle,
          }}
        >
          At 1st Forex{" "}
          <span style={{ color: "#F30", fontWeight: 700 }}>
            Trading Academy
          </span>
          , we combine nearly two decades of experience with cutting-edge
          technology to deliver a unique and effective learning experience.
        </Typography>

        <Typography
          sx={{
            ...typographyStyle,
          }}
        >
          Based in Dubai, our academy is a global hub for traders who want to
          achieve financial independence and master the forex markets.
        </Typography>

        <Typography
          sx={{
            ...typographyStyle,
          }}
        >
          Our online course is recognized as one of the best in the world,
          offering step-by-step guidance for traders at all levels. For
          beginners, we start with the basics of forex trading, building a solid
          foundation of knowledge.
        </Typography>

        <Typography
          sx={{
            ...typographyStyle,
          }}
        >
          For advanced traders, we dive into professional strategies, including
          our copyrighted and backtested{" "}
          <span style={{ color: "#F30", fontWeight: 700 }}>
            Breakout System
          </span>
          , proven to yield successful results.
        </Typography>

        <Typography
          sx={{
            ...typographyStyle,
          }}
        >
          We don’t just see ourselves as an academy—we’re a{" "}
          <span style={{ color: "#F30", fontWeight: 700 }}>community</span> and,
          more importantly, a{" "}
          <span style={{ color: "#F30", fontWeight: 700 }}>family</span> of
          traders. With over 1,000 satisfied students, we are dedicated to
          creating an inclusive and supportive environment where everyone can
          thrive.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "40%",
          aspectRatio: "526 / 461",
          position: "relative",
          "@media (max-width: 992px)": {
            display: "none",
          },
        }}
      >
        <Image src={CourseLaptop} alt="laptop" fill />
      </Box>
    </Box>
  );
};

export default AboutUs;
