"use client";
import { Box, Container, Typography } from "@mui/material";
import Badge from "@/src/components/Badge";

const Vision = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          maxWidth: "1220px",
          mx: "auto",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          py: "80px",
          gap: "12px",
          "@media (max-width: 992px)": {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: "60px",
          },
          "@media (max-width: 576px)": {
            py: "32px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            minWidth: "167px",
          }}
        >
          <Badge title="Vision Statement" />
        </Box>

        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "144%",
            letterSpacing: "-0.48px",
            maxWidth: "802px",
            "@media (max-width: 992px)": {
              fontSize: "20px",
              textAlign: "center",
            },
            "@media (max-width: 576px)": {
              fontSize: "16px",
              letterSpacing: "-0.32px",
            },
          }}
        >
          &quot;To empower a global community of traders by blending two decades
          of expertise with cutting edge AI technology, delivering unparalleled
          forex education, state-of-the-art signals, and innovative trading
          solutions that inspire financial growth and confidence.
          <Box
            component={"span"}
            sx={{
              display: "none",
              "@media (max-width: 992px)": {
                display: "inline",
                minHeight: "24px",
              },
            }}
          >
            <br />
            <span style={{ display: "block", marginTop: "12px" }}></span>
          </Box>{" "}
          At 1st Forex, we are shaping the future of trading by building a
          connected, adaptive, and results-driven community.&quot;
        </Typography>
      </Box>
    </Container>
  );
};

export default Vision;
