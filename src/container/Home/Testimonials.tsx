"use client";

import Badge from "@/src/components/Badge";
import {
  homeTestimonials,
  type HomeTestimonial,
} from "@/src/const/homeTestimonials";
import HeadTypography from "@/src/styled/HeadTypography";
import { Box, Typography } from "@mui/material";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialCard = ({
  testimonial,
  featured,
}: {
  testimonial: HomeTestimonial;
  featured: boolean;
}) => (
  <Box
    component="article"
    sx={{
      gridColumn: testimonial.layout.desktopColumn,
      gridRow: testimonial.layout.desktopRow,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: featured ? "36px" : "28px",
      minHeight: featured ? "100%" : "280px",
      p: featured ? "40px" : "32px",
      backgroundColor: featured ? "#333" : "#FFF",
      border: featured ? "1px solid #333" : "1px solid #E4E7EC",
      borderTop: featured ? "4px solid #F30" : "4px solid transparent",
      borderRadius: "8px",
      boxShadow: featured
        ? "0 18px 40px -24px rgba(16, 24, 40, 0.45)"
        : "0 12px 30px -24px rgba(16, 24, 40, 0.28)",
      transition: "transform 180ms ease, box-shadow 180ms ease",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: featured
          ? "0 22px 46px -24px rgba(16, 24, 40, 0.55)"
          : "0 18px 34px -22px rgba(16, 24, 40, 0.32)",
      },
      "@media (max-width: 1024px)": {
        gridColumn: "auto",
        gridRow: "auto",
        minHeight: "100%",
        p: "28px",
      },
      "@media (max-width: 576px)": {
        gap: "24px",
        p: "24px 20px",
      },
      "@media (prefers-reduced-motion: reduce)": {
        transition: "none",
        "&:hover": {
          transform: "none",
        },
      },
    }}
  >
    <Box
      component="blockquote"
      lang={testimonial.languageCode}
      dir="ltr"
      sx={{
        position: "relative",
        m: 0,
        pt: featured ? "38px" : "32px",
        color: featured ? "#FFF" : "#333",
        textAlign: "left",
        "&::before": {
          content: '"“"',
          position: "absolute",
          top: "-12px",
          left: 0,
          color: "#F30",
          fontFamily: "Georgia, serif",
          fontSize: featured ? "76px" : "64px",
          fontWeight: 700,
          lineHeight: 1,
        },
      }}
    >
      <Typography
        component="p"
        sx={{
          color: "inherit",
          fontSize: featured ? "22px" : "17px",
          fontWeight: featured ? 500 : 450,
          lineHeight: featured ? 1.65 : 1.7,
          letterSpacing: 0,
          "@media (max-width: 1024px)": {
            fontSize: "17px",
            lineHeight: 1.7,
          },
          "@media (max-width: 576px)": {
            fontSize: "15px",
            lineHeight: 1.7,
          },
        }}
      >
        {testimonial.quote}
      </Typography>
    </Box>

    <Box
      component="footer"
      dir="ltr"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        pt: "20px",
        borderTop: featured
          ? "1px solid rgba(255, 255, 255, 0.18)"
          : "1px solid #EAECF0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
        <Box
          aria-hidden="true"
          sx={{
            width: "42px",
            height: "42px",
            flexShrink: 0,
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            backgroundColor: featured ? "#F30" : "#FFF0EB",
            color: featured ? "#FFF" : "#CC2B00",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          {getInitials(testimonial.name)}
        </Box>
        <Typography
          component="cite"
          sx={{
            minWidth: 0,
            color: featured ? "#FFF" : "#101828",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          {testimonial.name}
        </Typography>
      </Box>
    </Box>
  </Box>
);

const Testimonials = () => (
  <Box component="section" aria-labelledby="testimonials-heading">
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.72fr) minmax(320px, 0.4fr)",
        alignItems: "end",
        gap: "48px",
        mb: "44px",
        "@media (max-width: 768px)": {
          gridTemplateColumns: "1fr",
          gap: "20px",
          mb: "32px",
          textAlign: "center",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            mb: "20px",
            "@media (max-width: 768px)": { justifyContent: "center" },
          }}
        >
          <Badge title="Member stories" />
        </Box>
        <HeadTypography id="testimonials-heading" sx={{ color: "#333" }}>
          Shared by members learning with 1stForex.
        </HeadTypography>
      </Box>
      <Typography
        sx={{
          color: "#667085",
          fontSize: "17px",
          fontWeight: 500,
          lineHeight: 1.65,
          letterSpacing: 0,
          textAlign: "start",
          "@media (max-width: 768px)": {
            maxWidth: "560px",
            mx: "auto",
            textAlign: "center",
          },
          "@media (max-width: 576px)": {
            fontSize: "15px",
          },
        }}
      >
        Experiences shared by members as they explore the academy, trading
        signals, and their own approach to the market.
      </Typography>
    </Box>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        gridAutoFlow: "row dense",
        gap: "20px",
        "@media (max-width: 1024px)": {
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        },
        "@media (max-width: 700px)": {
          gridTemplateColumns: "1fr",
          gap: "16px",
        },
      }}
    >
      {homeTestimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.name}
          testimonial={testimonial}
          featured={index === 0}
        />
      ))}
    </Box>
  </Box>
);

export default Testimonials;
