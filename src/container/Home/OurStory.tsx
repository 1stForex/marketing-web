"use client";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Bull from "@/src/assets/images/Bull.png";

const OurStory = () => {
  const paragraphs = [
    "Founded in 2004, 1st Forex has been a trusted name in the forex trading industry for over two decades. Based in the United Arab Emirates, we specialize in providing top-notch forex education and reliable trading signals, empowering traders worldwide to achieve their financial goals",
    "Through our 1st Forex Academy, we have trained over 1,000 happy students and traders via online courses and in-person seminars, constantly refining our curriculum to remain one of the best in the world. Our track record speaks for itself, with countless success stories from those who have trusted us to guide their trading journey.",
    "Our team is the perfect blend of experienced forex veterans, young and successful traders, and cutting-edge AI specialists. Together, we are committed to staying ahead of industry trends, incorporating state-of-the-art AI technology into our signals and tools. From automated bots to advanced signals available on our mobile app and user-friendly website, we direct our clients toward smarter and more profitable trading decisions.",
    "At 1st Forex, we don’t just see clients—we see family. We are passionate about what we do, and we are dedicated to building a thriving, connected community where traders of all levels can learn, grow, and succeed",
  ];

  return (
    <Box
      sx={{
        padding: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
      }}
    >
      <Box sx={{ mb: "24px" }}>
        <Badge title="Our Story" />
      </Box>

      <Typography
        sx={{
          mb: "32px",
          color: "var(--Grey-900, #333)",
          textAlign: "center",

          fontSize: "48px",
          fontWeight: 700,
          lineHeight: "100%",
          letterSpacing: "-1.92px",
        }}
      >
        About <span style={{ color: "var(--primary-400-base, #F30)" }}>Us</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "627px",
            height: "408px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "408px",
              overflowY: "auto",
              position: "relative",
              paddingLeft: "48px",
              "&::-webkit-scrollbar": {
                width: "8px",
                background: "transparent",
              },
              "&::-webkit-scrollbar-track": {
                background: "var(--Grey-900, #333)",
                borderRadius: "32px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "var(--primary-400-base, #F30)",
                borderRadius: "32px",
              },
              direction: "rtl",
              "& > *": {
                direction: "ltr",
              },
            }}
          >
            <Typography
              sx={{
                color: "var(--Grey-900, #333)",

                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "120%",
                letterSpacing: "-0.48px",
                mb: "16px",
                mt: "117px",
              }}
            >
              How We Started?
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                mb: "117px",
              }}
            >
              {paragraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "var(--Shade-Black, #000)",

                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "120%",
                    letterSpacing: "-0.4px",
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: "8px",
              right: 0,
              height: "120px",
              background:
                "linear-gradient(to top, var(--Grey-50, #F9FAFB), transparent)",
              pointerEvents: "none",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "408px",
            aspectRatio: "1",
          }}
        >
          <Image
            src={Bull}
            alt="Bull"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;
