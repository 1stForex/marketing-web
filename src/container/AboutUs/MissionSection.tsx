import Image from "next/image";
import Laptop from "@/src/assets/images/half-laptop.png";
import Badge from "@/src/components/Badge";
import { Box, Typography } from "@mui/material";

export default function MissionSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#333",
        gap: "31px",
        padding: "80px 0 0",
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
          }}
        >
          Our mission is simple yet powerful: Empowering Your Trading Journey.
          We aim to inspire and guide traders at every stage, helping them
          navigate the complexities of the forex market with confidence and
          skill. Join the 1st Forex family and be part of a legacy where passion
          meets precision, and tradition meets innovation. Together, we’ll turn
          dreams into financial independence and trading mastery.
        </Typography>
      </Box>
      <Image src={Laptop} alt="Laptop Image" />
    </Box>
  );
}
