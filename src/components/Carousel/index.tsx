"use client";
import Badge from "@/src/components/Badge";
import Card from "@/src/components/Card";
import { Box } from "@mui/material";

import Slider from "react-slick";
import { CarouselProp } from "@/src/types/Carousel.interface";

const Carousel: React.FC<CarouselProp> = ({
  headerLeft = false,
  badgeTitle,
  cards,
  isCarousel = true,
  children,
}) => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  return (
    <Box
      sx={{
        py: "44px",
        display: "flex",
        flexDirection: "column",
        alignItems: headerLeft ? "flex-start" : "center",
        justifyContent: "center",
        borderRadius: "32px",
        background: "var(--Grey-50, #F9FAFB)",
        boxShadow:
          "0px 5px 13px -5px rgba(16, 25, 40, 0.05), 0px 2px 4px -1px rgba(16, 25, 40, 0.02)",
        "@media (max-width: 576px)": {
          py: "32px",
        },
      }}
    >
      <Box
        sx={{
          mb: "32px",
          pl: headerLeft ? "65px" : "",
          display: "flex",
          flexDirection: "column",
          alignItems: headerLeft ? "flex-start" : "center",
        }}
      >
        <Box sx={{ mb: "24px" }}>
          <Badge title={badgeTitle} />
        </Box>

        {children}
      </Box>

      {isCarousel ? (
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Slider {...settings}>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                description={card.description}
                isCarousel
              />
            ))}
          </Slider>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            px: "8px",
            "@media (max-width: 992px)": {
              flexDirection: "column",
            },
            "@media (max-width: 768px)": {
              gap: "16px",
            },
            "@media (max-width: 576px)": {
              gap: "12px",
            },
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Carousel;
