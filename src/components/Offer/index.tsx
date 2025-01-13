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
    width: descriptionWidth ? `${descriptionWidth}px` : "549px",
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          marginBottom: "3.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "21px",
            alignItems: "flex-start",
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
              width: "535px",
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
        <Box>
          {buttonText && (
            <CustomButton variant="red" onClick={onClick}>
              {buttonText}
            </CustomButton>
          )}
        </Box>
      </Box>
      <Image src={phoneImg} alt="Phone Image" />
    </Box>
  );
}
