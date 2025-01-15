import { Box, Typography } from "@mui/material";
import phoneImg from "@/src/assets/images/phone.png";
import Image from "next/image";
import Badge from "../Badge";
import CustomButton from "../Button";
import { OfferProps } from "@/src/types/Offer.interface";

export default function Offer({
  badgeTitle,
  title,
  specialTitle,
  description,
  descriptionWidth,
  subDescription,
  buttonText,
  onClick,
}: OfferProps) {
  const typographyStyles = {
    color: "#FFF",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "28.8px",
    letterSpacing: "-0.48px",
    maxWidth: descriptionWidth ? `${descriptionWidth}px` : "549px",

    "@media (max-width: 992)": {
      maxWidth: "100%",
    },

    "@media (max-width: 768px)": {
      fontSize: "20px",
    },
    "@media (max-width: 576px)": {
      fontSize: "16px",
      letterSpacing: "-0.32px",
    },
  };

  return (
    <Box
      sx={{
        background: "#333",
        width: "100%",
        padding: "87px 30px 0 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        overflowX: "hidden",

        "@media (max-width: 992px)": {
          padding: "60px 30px",
        },

        "@media (max-width: 576px)": {
          padding: "30px 15px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          marginBottom: "3.5rem",

          "@media (max-width: 992px)": {
            marginBottom: "0",
            gap: "24px",
          },

          "@media (max-width: 768px)": {
            gap: "20px",
          },

          "@media (max-width: 576px)": {
            gap: "16px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "21px",
            alignItems: "flex-start",

            "@media (max-width: 768px)": {
              gap: "17px",
            },

            "@media (max-width: 576px)": {
              gap: "13px",
            },
          }}
        >
          {badgeTitle && <Badge title={badgeTitle} />}
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "48px",
              letterSpacing: "-1.92px",
              maxWidth: "535px",

              "@media (max-width: 992px)": {
                maxWidth: "100%",
              },

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
            {title} <span style={{ color: "#F30" }}>{specialTitle}</span>
          </Typography>
        </Box>
        <Box
          sx={{
            ...(subDescription && {
              display: "flex",
              flexDirection: "column",
              gap: "20px",

              "@media (max-width: 768px)": {
                gap: "16px",
              },

              "@media (max-width: 576px)": {
                gap: "12px",
              },
            }),
          }}
        >
          <Typography
            sx={{
              ...typographyStyles,
            }}
          >
            {description}
          </Typography>
          {subDescription && (
            <Typography
              sx={{
                ...typographyStyles,
              }}
            >
              {subDescription}
            </Typography>
          )}
        </Box>
        {buttonText && (
          <Box>
            <CustomButton variant="red" onClick={onClick}>
              {buttonText}
            </CustomButton>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          position: "relative",
          maxWidth: "418px",
          width: "100%",
          aspectRatio: "418 / 505",

          "@media (max-width: 992px)": {
            display: "none",
          },
        }}
      >
        <Image
          src={phoneImg}
          alt="Phone Image"
          fill
          style={{ objectFit: "contain", objectPosition: "bottom" }}
        />
      </Box>
    </Box>
  );
}
