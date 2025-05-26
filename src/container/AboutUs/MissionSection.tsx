import Image from "next/image";
import Community from "@/src/assets/images/community.png";
import Badge from "@/src/components/Badge";
import { Box, Container } from "@mui/material";
import HeadTypography from "@/src/styled/HeadTypography";
import BaseTypography from "@/src/styled/BaseTypography";

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
              <HeadTypography color="#FFF">Our Mission</HeadTypography>
            </Box>
            <BaseTypography color="#FFF" fontWeight={400}>
              Our mission is simple yet powerful: Empowering Your Trading
              Journey. We aim to inspire and guide traders at every stage,
              helping them navigate the complexities of the forex market with
              confidence and skill.
            </BaseTypography>
            <BaseTypography color="#FFF" fontWeight={400}>
              Join the 1st Forex family and be part of a legacy where passion
              meets precision, and tradition meets innovation. Together, we’ll
              turn dreams into financial independence and trading mastery.
            </BaseTypography>
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
