"use client";
import { Box } from "@mui/material";
import Logo from "@/src/assets/icons/logo.svg";
import Image from "next/image";
import CustomButton from "@/src/components/Button";
import HeadTypography from "@/src/styled/HeadTypography";
import BaseTypography from "@/src/styled/BaseTypography";
import { useRouter } from "next/navigation";
import { RedirectUrls } from "@/src/const/Enum";

const CommunityBanner = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        borderRadius: "32px",
        background: "rgb(237,239,240)",
        boxShadow:
          "-5px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
        padding: "80px 16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "24px",
        "@media (max-width: 768px)": {
          gap: "20px",
        },
        "@media (max-width: 576px)": {
          gap: "16px",
          padding: "36px 6px",
        },
      }}
    >
      <Box
        sx={{
          background: "#F30",
          borderRadius: "12px",
          padding: "4px 12px",
        }}
      >
        <Image src={Logo} alt="logo" />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "679px",
          "@media (max-width: 768px)": {
            gap: "14px",
          },
          "@media (max-width: 576px)": {
            gap: "12px",
          },
        }}
      >
        <HeadTypography color="#000" textAlign={"center"}>
          Your Voice, Your Community
        </HeadTypography>

        <BaseTypography
          sx={{
            color: "var(--Shade-Black, #000)",
            fontSize: "20px",
            fontWeight: 400,
            letterSpacing: "-0.4px",
            "@media (max-width: 768px)": {
              fontSize: "18px",
            },
            "@media (max-width: 576px)": {
              fontSize: "16px",
            },
          }}
        >
          Whether you&apos;re here to learn, share, or grow, the 1st Forex
          Community is the perfect place to connect with like-minded individuals
          and take your trading to the next level.
        </BaseTypography>

        <CustomButton onClick={() => router.push(RedirectUrls.REGISTER_URL)}>
          Join Us Now
        </CustomButton>
      </Box>
    </Box>
  );
};

export default CommunityBanner;
