"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import About from "@/src/assets/images/about-us.jpg";
import Logo from "@/src/assets/icons/logo.svg";
import AboutUsTypography from "@/src/styled/AboutUsTypography";
import HeadTypography from "@/src/styled/HeadTypography";

export default function AboutSection() {
  const paragraphs = [
    "Founded in Montreal over 20 years ago, 1st Forex has grown into a global company focused on forex education and trading signals. What started as in-person seminars and early online signals has developed into a trusted platform used by thousands of traders worldwide.",
    "A key part of our work is our Breakout Strategy, a proven trading method designed to spot strong market moves early. This strategy is at the core of our signals, education, and AI systems, helping traders make more consistent and informed decisions.",
    "Now based in Costa Rica, our goal remains the same: to help traders build confidence, improve their skills, and work toward financial independence in the forex market.",
    "Leading 1st Forex is our CEO, Marie Josée Bergeron, who has over 22 years of experience in forex trading. Her vision of building a strong trading company and real trader community has shaped everything we do.",
    "She is supported by a skilled team of traders and an AI specialist who help keep our strategies and signals accurate, modern, and effective.",
  ];

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
          alignItems: "center",
          "@media (max-width: 992px)": {
            gap: "32px",
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {paragraphs.map((paragraph) => (
            <AboutUsTypography key={paragraph}>{paragraph}</AboutUsTypography>
          ))}
        </Box>
        <Box
          sx={{
            position: "relative",
            flex: "0 0 416px",
            width: "416px",
            aspectRatio: "1",
            overflow: "hidden",
            borderRadius: "32px",
            boxShadow: "0px 16px 34px -24px rgba(16, 25, 40, 0.45)",
            "@media (max-width: 992px)": {
              width: "min(100%, 416px)",
              flexBasis: "auto",
            },
          }}
        >
          <Image
            src={About}
            alt="1st Forex team"
            fill
            sizes="(max-width: 992px) 100vw, 416px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
