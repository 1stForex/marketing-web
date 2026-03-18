"use client";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import About from "@/src/assets/images/about-us.jpg";
import Logo from "@/src/assets/icons/logo.svg";
import AboutUsTypography from "@/src/styled/AboutUsTypography";
import HeadTypography from "@/src/styled/HeadTypography";

export default function AboutSection() {
  const isMobile = useMediaQuery("(min-width: 576px)");

  const firstParagraphFirstHalfHTML = `Founded in Montreal over
            <span style="color:#F30; font-weight:700;">
              20 years ago,
            </span>
             1st Forex has grown to become a global leader in forex education
            and trading signals.`;

  const firstParagraphSecondHalfHTML = `From humble beginnings conducting in-person
            seminars and offering web-based forex signals, we’ve evolved into a
            trusted name in the industry with over
            <span style="color: #F30; font-weight: 700;">
              1,000 satisfied customers
            </span>
            worldwide.`;

  const thirdParagraphFirstHalfHTML = `At the heart of 1st Forex is our
            <span style="color:#F30, font-weight: 700;">
              CEO, Marie Josée Bergeron,
            </span>
            a seasoned trader with over
            <span style="color:#F30, font-weight: 700;">
              22 years of experience
            </span>
            in the forex industry.`;

  const thirdParagraphSecondHalfHTML = `Driven by a dream to build the world’s best
            forex company and foster a real community of apex traders, Marie Josée’s
            vision has shaped every aspect of 1st Forex.`;

  const firstParagraph = isMobile
    ? `${firstParagraphFirstHalfHTML} ${firstParagraphSecondHalfHTML}`
    : firstParagraphFirstHalfHTML;

  const thirdParagraph = isMobile
    ? `${thirdParagraphFirstHalfHTML} ${thirdParagraphSecondHalfHTML}`
    : thirdParagraphFirstHalfHTML;

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
            "@media (max-width: 992px)": {
              mx: "auto",
            },
          }}
        >
          <Image src={Logo} alt="logo" />
        </Box>
        <HeadTypography
          sx={{
            color: "#333",
            "@media (max-width: 992px)": {
              textAlign: "center",
              width: "100%",
            },
          }}
        >
          About Us
        </HeadTypography>
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
          <AboutUsTypography
            dangerouslySetInnerHTML={{ __html: firstParagraph }}
          />
          <AboutUsTypography
            sx={{
              display: isMobile ? "none" : "block",
            }}
            dangerouslySetInnerHTML={{ __html: firstParagraphSecondHalfHTML }}
          />
          <AboutUsTypography>
            Today, headquartered in the vibrant city of{" "}
            <span style={{ color: "#F30", fontWeight: "700" }}>Dubai</span>,
            United Arab Emirates, we continue to empower traders to achieve
            financial independence and master the forex markets.
          </AboutUsTypography>
          <AboutUsTypography
            dangerouslySetInnerHTML={{ __html: thirdParagraph }}
          />
          <AboutUsTypography
            sx={{
              display: isMobile ? "none" : "block",
            }}
            dangerouslySetInnerHTML={{ __html: thirdParagraphSecondHalfHTML }}
          />
          <AboutUsTypography>
            He is supported by an exceptional team, including experienced
            traders and a leading{" "}
            <span style={{ color: "#F30", fontWeight: "700" }}>AI expert</span>,
            ensuring our offerings remain cutting-edge and unparalleled in the
            industry.
          </AboutUsTypography>
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
