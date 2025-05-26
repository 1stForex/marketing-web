"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import About from "@/src/assets/images/about-us.jpg";
import Logo from "@/src/assets/icons/logo.svg";

export default function AboutSection() {
  const isMobile = useMediaQuery("(min-width: 576px)");
  const typographyStyle = {
    color: "#000",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "-0.4px",
    "@media (max-width: 992px)": {
      textAlign: "center",
    },

    "@media (max-width: 768px)": {
      fontSize: "18px",
    },

    "@media (max-width: 576px)": {
      fontSize: "16px",
    },
  };

  const firstParagraphFirstHalf = `Founded in Montreal over
            <span style="color:#F30; font-weight:700;">
              20 years ago
            </span>
            , 1st Forex has grown to become a global leader in forex education
            and trading signals.`;

  const firstParagraphSecondHalf = `From humble beginnings conducting in-person
            seminars and offering web-based forex signals, we’ve evolved into a
            trusted name in the industry with over
            <span style="color: #F30; font-weight: 700;">
              1,000 satisfied customers
            </span>
            worldwide.`;

  const thirdParagraphFirstHalf = `At the heart of 1st Forex is our
            <span style="color:#F30, font-weight: 700;">
              CEO, Luc Verville
            </span>
            , a seasoned trader with over
            <span style="color:#F30, font-weight: 700;">
              22 years of experience
            </span>
            in the forex industry.`;

  const thirdParagraphSecondHalf = `Driven by a dream to build the world’s best
            forex company and foster a real community of apex traders, Luc’s
            vision has shaped every aspect of 1st Forex.`;

  const firstParagraph = isMobile
    ? `${firstParagraphFirstHalf} ${firstParagraphSecondHalf}`
    : firstParagraphFirstHalf;

  const thirdParagraph = isMobile
    ? `${thirdParagraphFirstHalf} ${thirdParagraphSecondHalf}`
    : thirdParagraphFirstHalf;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "21px",
          alignItems: "flex-start",
          marginBottom: "27px",
        }}
      >
        <Box
          sx={{
            background: "#F30",
            borderRadius: "12px",
            padding: "4px 12px",
            mx: "auto",
          }}
        >
          <Image src={Logo} alt="logo" />
        </Box>
        <Typography
          sx={{
            color: "#333",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "100%",
            letterSpacing: "-1.92px",

            "@media (max-width: 992px)": {
              textAlign: "center",
              width: "100%",
            },

            "@media (max-width: 768px)": {
              fontSize: "40px",
              letterSpacing: "-1.28px",
            },

            "@media (max-width: 576px)": {
              fontSize: "26px",
              letterSpacing: "-0.64px",
            },
          }}
        >
          About Us
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "95px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              ...typographyStyle,
            }}
            dangerouslySetInnerHTML={{ __html: firstParagraph }}
          />
          <Typography
            sx={{
              ...typographyStyle,
              display: isMobile ? "none" : "block",
            }}
            dangerouslySetInnerHTML={{ __html: firstParagraphSecondHalf }}
          />
          <Typography
            sx={{
              ...typographyStyle,
            }}
          >
            Today, headquartered in the vibrant city of{" "}
            <span style={{ color: "#F30", fontWeight: "700" }}>Dubai</span>,
            United Arab Emirates, we continue to empower traders to achieve
            financial independence and master the forex markets
          </Typography>
          <Typography
            sx={{
              ...typographyStyle,
            }}
            dangerouslySetInnerHTML={{ __html: thirdParagraph }}
          />
          <Typography
            sx={{
              ...typographyStyle,
              display: isMobile ? "none" : "block",
            }}
            dangerouslySetInnerHTML={{ __html: thirdParagraphSecondHalf }}
          />
          <Typography
            sx={{
              ...typographyStyle,
            }}
          >
            He is supported by an exceptional team, including experienced
            traders and a leading{" "}
            <span style={{ color: "#F30", fontWeight: "700" }}>AI expert</span>,
            ensuring our offerings remain cutting-edge and unparalleled in the
            industry.
          </Typography>
        </Box>
        <Box
          sx={{
            "@media (max-width: 992px)": {
              display: "none",
            },
          }}
        >
          <Image src={About} alt="Image" width={416} height={416} />
        </Box>
      </Box>
    </Box>
  );
}
