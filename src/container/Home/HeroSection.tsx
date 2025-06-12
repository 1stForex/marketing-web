"use client";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Logo from "@/src/assets/icons/logo.svg";
import StatsCard from "./StatsCard";
import Marquee from "react-fast-marquee";
import CustomButton from "@/src/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import HeadTypography from "@/src/styled/HeadTypography";
import BaseTypography from "@/src/styled/BaseTypography";
import CustomVideo from "@/src/components/CustomVideo";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 576px)");
  const router = useRouter();
  const ws = useRef<WebSocket | null>(null);
  const [liveStats, setLiveStats] = useState<
    { symbol: string; price: number; change_percent: number }[]
  >([]);

  const handleAiSignalClick = () => router.push("/ai-signal");
  const handleAcademyClick = () => router.push("/academy");

  useEffect(() => {
    let isMounted = true;
    const socket = new WebSocket(
      `wss://${process.env.NEXT_PUBLIC_WEB_SOCKET}/ws/forex-currencies/`
    );
    ws.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (!isMounted) return;

        setLiveStats((prev) => {
          const index = prev.findIndex((item) => item.symbol === data.symbol);
          if (index !== -1) {
            const updated = [...prev];
            updated[index] = data;
            return updated;
          }
          return [...prev, data];
        });
      } catch (err) {
        console.error("Error parsing WebSocket data", err);
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    socket.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      isMounted = false;
      if (ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.close();
      }
      ws.current = null;
    };
  }, []);

  const renderedStats = useMemo(
    () => (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {liveStats.map((data) => (
          <StatsCard
            key={data.symbol}
            symbol={data.symbol}
            change_percent={data.change_percent}
            price={data.price}
          />
        ))}
      </Box>
    ),
    [liveStats]
  );

  return (
    <Box
      sx={{
        position: "relative",
        color: "#FFF",
        py: "96px",
        borderRadius: "32px",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)",
        boxShadow:
          "0px 12px 16px -4px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.06)",

        "@media (max-width: 992px)": {
          py: "64px",
        },
        "@media (max-width: 576px)": {
          py: "32px",
        },
        overflow: "hidden",
      }}
    >
      <CustomVideo />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          mb: "64px",
          px: "16px",
          "@media (max-width: 992px)": {
            gap: "20px",
            mb: "44px",
          },
          "@media (max-width: 576px)": {
            gap: "16px",
            mb: "24px",
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
          <Image src={Logo} alt="logo" priority />
        </Box>

        <HeadTypography color="#FFF" textAlign={"center"} maxWidth={"464px"}>
          Empowering Your Trading Journey
        </HeadTypography>

        <BaseTypography
          sx={{
            color: "#FFF",
            maxWidth: "650px",
            "@media (max-width: 992px)": {
              fontSize: "20px",
            },
            "@media (max-width: 576px)": {
              fontSize: "14px",
              lineHeight: "145%",
              letterSpacing: "0",
            },
          }}
        >
          Gain the confidence, knowledge, and support you need to thrive in the
          global forex markets.
        </BaseTypography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <CustomButton
            variant="red"
            padding={isMobile ? "16px 24px" : "16px 48px"}
            onClick={handleAiSignalClick}
          >
            AI Signal
          </CustomButton>
          <CustomButton
            variant="transparent"
            padding={isMobile ? "16px 24px" : "16px 48px"}
            onClick={handleAcademyClick}
          >
            Academy
          </CustomButton>
        </Box>
      </Box>

      <Marquee>{renderedStats}</Marquee>
    </Box>
  );
};

export default HeroSection;
