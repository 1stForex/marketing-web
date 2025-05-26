"use client";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Logo from "@/src/assets/icons/logo.svg";
import StatsCard from "./StatsCard";
import Marquee from "react-fast-marquee";
import CustomButton from "@/src/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HeadTypography from "@/src/styled/HeadTypography";
import BaseTypography from "@/src/styled/BaseTypography";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 576px)");
  const router = useRouter();
  const ws = useRef<WebSocket | null>(null);
  const [liveStats, setLiveStats] = useState<
    { symbol: string; price: number; change_percent: number }[]
  >([]);

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
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/HeroBgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
          <Image src={Logo} alt="logo" />
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
            onClick={() => router.push("/ai-signal")}
          >
            AI Signal
          </CustomButton>
          <CustomButton
            variant="transparent"
            padding={isMobile ? "16px 24px" : "16px 48px"}
            onClick={() => router.push("/academy")}
          >
            Academy
          </CustomButton>
        </Box>
      </Box>

      <Marquee>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {liveStats.map((data, index) => (
            <StatsCard
              key={index}
              symbol={data.symbol}
              change_percent={data.change_percent}
              price={data.price}
            />
          ))}
        </Box>
      </Marquee>
    </Box>
  );
};

export default HeroSection;
