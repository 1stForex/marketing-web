"use client";
import Badge from "@/src/components/Badge";
import Card from "@/src/components/Card";
import { Box, IconButton, useMediaQuery } from "@mui/material";

import Slider from "react-slick";
import { CarouselProp } from "@/src/types/Carousel.interface";
import { useEffect, useRef, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Carousel.css";

const Carousel: React.FC<CarouselProp> = ({
  headerLeft = false,
  badgeTitle,
  cards,
  isCarousel = true,
  children,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const isMobile = useMediaQuery("(max-width: 576px)");
  const [autoplay, setAutoplay] = useState(isMobile);

  useEffect(() => {
    setAutoplay(isMobile);
  }, [isMobile]);

  const nextCard = () => {
    sliderRef.current?.slickNext();
  };

  const previousCard = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,
    speed: 3000,
    autoplay: autoplay,
    autoplaySpeed: 1000,
  };

  const renderStackedCards = (carouselCards = false) => (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
        ...(carouselCards
          ? {
              flexDirection: "column",
              maxWidth: "540px",
              mx: "auto",
              px: { xs: "16px", sm: "24px" },
            }
          : {
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
            }),
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
          description={card.description}
          isCarousel={carouselCards ? false : undefined}
        />
      ))}
    </Box>
  );

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
        maxWidth: "100%",
        overflow: "hidden",
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
          gap: "24px",
          alignItems: headerLeft ? "flex-start" : "center",
          "@media (max-width: 992px)": {
            pl: headerLeft ? "48px" : "",
          },
          "@media (max-width: 768px)": {
            pl: headerLeft ? "36px" : "",
            gap: "20px",
            mb: "24px",
          },
          "@media (max-width: 576px)": {
            pl: headerLeft ? "24px" : "",
            gap: "16px",
            mb: "20px",
            width: "100%",
            alignItems: "center",
          },
        }}
      >
        <Box>
          <Badge title={badgeTitle} />
        </Box>

        {children}
      </Box>

      {isCarousel && isMobile ? (
        renderStackedCards(true)
      ) : isCarousel ? (
        <>
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Slider ref={sliderRef} {...settings} className="custom-carousel">
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
            <Box
              sx={{
                display: isMobile ? "none" : "flex",
                gap: "8px",
                position: "absolute",
                right: "16px",
                top: "-65px",
              }}
            >
              <IconButton
                onClick={() => {
                  previousCard();
                }}
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                  "&:hover": { backgroundColor: "#F30", color: "#FFF" },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  nextCard();
                }}
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                  "&:hover": { backgroundColor: "#F30", color: "#FFF" },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Box>
        </>
      ) : (
        renderStackedCards()
      )}
    </Box>
  );
};

export default Carousel;
