import Image from "next/image";
import Community from "@/src/assets/images/community.png";
import Badge from "@/src/components/Badge";
import { Box, Typography, Container } from "@mui/material";

export default function MissionSection() {
  return (
    <Box
      sx={{
        background: "#333",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pt: "80px",
            gap: "31px",

            "@media (max-width: 992px)": {
              pt: "60px",
            },

            "@media (max-width: 768px)": {
              pt: "40px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              maxWidth: "1006px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "21px",
              }}
            >
              <Badge title="Vision" />
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "100%",
                  letterSpacing: "-1.92px",

                  "@media (max-width: 768px)": {
                    fontSize: "40px",
                    letterSpacing: "-1.28px",
                  },
                  "@media (max-width: 576px)": {
                    fontSize: "32px",
                    letterSpacing: "-0.64px",
                  },
                }}
              >
                Our Mission
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "120%",
                letterSpacing: "-0.48px",
                textAlign: "center",

                "@media (max-width: 768px)": {
                  fontSize: "20px",
                },
                "@media (max-width: 576px)": {
                  fontSize: "16px",
                  letterSpacing: "-0.32px",
                },
              }}
            >
              Our mission is simple yet powerful: Empowering Your Trading
              Journey. We aim to inspire and guide traders at every stage,
              helping them navigate the complexities of the forex market with
              confidence and skill. Join the 1st Forex family and be part of a
              legacy where passion meets precision, and tradition meets
              innovation. Together, we’ll turn dreams into financial
              independence and trading mastery.
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              maxWidth: "966px",
              width: "100%",
              aspectRatio: "907 / 417",
            }}
          >
            <Image
              src={Community}
              alt="Laptop Image"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
