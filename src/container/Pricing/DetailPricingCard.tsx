"use client";
import Badge from "@/src/components/Badge";
import CustomButton from "@/src/components/Button";
import { Box, Typography } from "@mui/material";
import Verfied from "@/src/assets/icons/verfied.svg";
import Image from "next/image";
import { PricingCardProps } from "@/src/types/PricingCard.interface";

const DetailPricingCard = ({
  variant = "white",
  badgeProps,
  price,
  btnLabel,
  features,
  btnOnClick,
  subText,
  isPopular,
  billing,
  freeSave,
}: PricingCardProps & {
  subText?: string;
  isPopular?: boolean;
  billing?: string;
  freeSave?: {
    month: string;
    save: string;
  };
}) => {
  const getBadgeStyles = (variant: "white" | "black") => {
    switch (variant) {
      case "black":
        return {
          background: "var(--Grey-900, #333)",
          textColor: "var(--Shade-White, #FFF)",
          boxShadow: "0px -1px 28.3px 0px rgba(255, 51, 0, 0.30)",
        };
      default:
        return {
          background: "var(--Shade-White, #FFF)",
          textColor: "var(--Grey-900, #333)",
          boxShadow:
            "0px 14px 22px -9px rgba(16, 25, 40, 0.14), 0px 0px 3px -1px rgba(16, 25, 40, 0.04)",
        };
    }
  };

  const { background, textColor, boxShadow } = getBadgeStyles(variant);

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "24px",
        border: "0.5px solid #F30",
        background: background,
        boxShadow: boxShadow,
        padding: "32px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isPopular && (
        <Box
          sx={{
            padding: "10px 16px",
            background: "#F30",
            color: "#FFF",
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          <Typography>Most Popular</Typography>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          mb: "24px",
        }}
      >
        <Badge title={badgeProps.title} variant={badgeProps.variant} />

        <Typography
          sx={{
            color: "#333",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "145%",
          }}
        >
          {subText}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: textColor,
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "120%",
                letterSpacing: "-1.6px",
                "@media (max-width: 768px)": {
                  fontSize: "36px",
                },
                "@media (max-width: 576px)": {
                  fontSize: "32px",
                },
              }}
            >
              ${price}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "145%",
              }}
            >
              /month
            </Typography>
          </Box>
          {billing && (
            <Typography
              sx={{
                color: "#333",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "145%",
              }}
            >
              ${billing} billed yearly
            </Typography>
          )}
          {freeSave && (
            <Typography
              sx={{
                color: "#0F973D",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "145%",
              }}
            >
              {freeSave.month} month FREE Save ${freeSave.save}/year
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          mb: "24px",
        }}
      >
        {features?.map((feature, index) => (
          <Box
            key={index}
            sx={{
              color: textColor,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Image src={Verfied} alt="verified icon" />

            <Typography
              sx={{
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "112.5%",
                "@media (max-width: 768px)": {
                  fontSize: "14px",
                },
                "@media (max-width: 567px)": {
                  fontSize: "12px",
                },
              }}
            >
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>

      <CustomButton width="100%" borderRadius="8px" onClick={btnOnClick}>
        {btnLabel}
      </CustomButton>
    </Box>
  );
};

export default DetailPricingCard;
