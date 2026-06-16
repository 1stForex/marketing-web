"use client";

import { Box, Typography, styled } from "@mui/material";
import mobileDashboard from "@/src/assets/images/user_mobile_dashboard.png";
import Image from "next/image";
import Badge from "../Badge";
import CustomButton from "../Button";
import { OfferProps } from "@/src/types/Offer.interface";

export default function Offer({
  badgeTitle,
  title,
  specialTitle,
  description,
  secondaryDescription,
  descriptionWidth,
  subDescription,
  buttonText,
  onClick,
  points = [],
  imageUrl,
}: OfferProps & { imageUrl?: string }) {
  const StyledTypography = styled(Typography)(() => ({
    color: "#FFF",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "145%",
    letterSpacing: "0",
    maxWidth: descriptionWidth ? `${descriptionWidth}px` : "549px",
    "@media (max-width: 992px)": {
      maxWidth: "100%",
    },
    "@media (max-width: 768px)": {
      fontSize: "20px",
      textAlign: "center",
    },
    "@media (max-width: 576px)": {
      fontSize: "16px",
    },
  }));

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
            alignItems: "center",
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
              alignItems: "center",
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
              lineHeight: "112%",
              letterSpacing: "0",
              maxWidth: "535px",

              "@media (max-width: 992px)": {
                maxWidth: "100%",
              },

              "@media (max-width: 768px)": {
                fontSize: "40px",
                lineHeight: "116%",
                textAlign: "center",
              },
              "@media (max-width: 576px)": {
                fontSize: "26px",
              },
            }}
          >
            {title} <span style={{ color: "#F30" }}>{specialTitle}</span>
          </Typography>
        </Box>
        {description && (
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
            <Box>
              <StyledTypography
                sx={{
                  mb: "12px",
                }}
              >
                {description}
              </StyledTypography>
              <StyledTypography>{secondaryDescription}</StyledTypography>
            </Box>
            {subDescription && (
              <StyledTypography>{subDescription}</StyledTypography>
            )}
          </Box>
        )}
        {points.length > 0 && (
          <Box
            component={"ol"}
            sx={{
              maxWidth: "549px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              paddingLeft: "20px",

              "@media (max-width: 1200px)": {
                maxWidth: "auto",
              },
            }}
          >
            {points?.map((item, index) => (
              <Typography
                key={index}
                component={"li"}
                sx={{
                  color: "#FFF",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "145%",
                  letterSpacing: "0",
                  "@media (max-width: 768px)": {
                    fontSize: "20px",
                  },
                  "@media (max-width: 576px)": {
                    fontSize: "16px",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        )}
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
          maxWidth: "460px",
          width: "100%",
          aspectRatio: "418 / 505",

          "@media (max-width: 1200px)": {
            display: "none",
          },
        }}
      >
        <Image
          src={imageUrl || mobileDashboard}
          alt="Phone Image"
          fill
          style={{ objectFit: "contain", objectPosition: "bottom" }}
        />
      </Box>
    </Box>
  );
}
