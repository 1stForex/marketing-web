"use client";
import AdvertiseCard from "./AdvertiseCard";
import { allAIAssistance } from "@/src/const/allAIAssistance";
import { allTradingBot } from "@/src/const/allTradingBot";
import { allMentorship } from "@/src/const/allMentorship";
import { Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Badge from "@/src/components/Badge";
import HeadTypography from "@/src/styled/HeadTypography";

export default function OptionSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const stage = stageRef.current;
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      if (!stage || cards.length < 3) return;

      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 900px)", () => {
        gsap.set(cards[0], {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          transformOrigin: "top center",
        });
        gsap.set(cards.slice(1), {
          yPercent: 116,
          scale: 1,
          autoAlpha: 0,
          transformOrigin: "top center",
        });

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: scrollRef.current,
            start: "top 96px",
            end: "+=3200",
            scrub: 1.25,
            pin: stage,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(cards[0], { scale: 0.965, y: -8, duration: 1.4 }, 0.35)
          .fromTo(
            cards[1],
            { yPercent: 116, autoAlpha: 0 },
            { yPercent: 12, autoAlpha: 1, duration: 2.4, ease: "power1.out" },
            0.8
          )
          .to(cards[0], { scale: 0.945, y: -16, duration: 1.6 }, 2.8)
          .to(cards[1], { scale: 0.972, yPercent: 8, duration: 1.7 }, 3.25)
          .fromTo(
            cards[2],
            { yPercent: 116, autoAlpha: 0 },
            { yPercent: 16, autoAlpha: 1, duration: 2.7, ease: "power1.out" },
            4.05
          )
          .to(cards[1], { scale: 0.952, yPercent: 8, duration: 1.35 }, 5.45)
          .to(cards[2], { yPercent: 10, duration: 1.6 }, 5.75)
          .to({}, { duration: 1.4 });

        return () => timeline.scrollTrigger?.kill();
      });

      return () => matchMedia.revert();
    }, scrollRef);

    return () => context.revert();
  }, []);

  const cardData = [
    {
      title: "Rules-Based",
      specialText: "Signal Process",
      cardInfo: allTradingBot,
    },
    {
      title: "Personal Trader",
      specialText: "Mentorship",
      cardInfo: allMentorship,
    },
    {
      title: "App-Based Signals with",
      specialText: "Trader Support",
      cardInfo: allAIAssistance,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "21px",
          mb: "64px",
        }}
      >
        <Badge title="Offers" />
        <HeadTypography color="#333" textAlign={"center"}>
          Signal{" "}
          <span style={{ color: " var(--primary-400-base, #F30)" }}>
            Plans
          </span>
        </HeadTypography>
      </Box>
      <Box
        ref={scrollRef}
        sx={{
          display: { xs: "none", md: "block" },
          position: "relative",
          pt: "1px",
        }}
      >
        <Box
          ref={stageRef}
          sx={{
            height: { md: "780px", lg: "820px" },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: "100%",
            }}
          >
            {cardData.map(({ title, specialText, cardInfo }, index) => (
              <AdvertiseCard
                key={index}
                index={index}
                title={title}
                specialText={specialText}
                cardInfo={cardInfo}
                setCardRef={(element, cardIndex) => {
                  cardRefs.current[cardIndex] = element;
                }}
                animated
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          gap: "22px",
        }}
      >
        {cardData.map(({ title, specialText, cardInfo }, index) => (
          <AdvertiseCard
            key={index}
            title={title}
            specialText={specialText}
            cardInfo={cardInfo}
          />
        ))}
      </Box>
    </Box>
  );
}
