"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import type { FormEvent } from "react";
import CustomButton from "../Button";
import CustomInputField from "../CustomInputField";
import { postPublicForm } from "@/src/services/publicApi";
import { useTranslations } from "next-intl";

export default function NewsLetter() {
  const t = useTranslations("Footer");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await postPublicForm("/core/newsletter-signup/", {
        email,
        source: "marketing-footer",
      });
      setStatus("success");
      setMessage(response.detail || t("subscribed"));
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : t("invalidEmail")
      );
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        gap: "24px",
        flexWrap: "wrap",

        "@media (max-width: 768px)": {
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "#333",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "28.8px",
            letterSpacing: "-0.48px",

            "@media (max-width: 768px)": {
              textAlign: "center",
            },
          }}
        >
          {t("newsletterTitle")}
        </Typography>
        <Typography
          sx={{
            width: "312px",
            color: "#344054",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "23.3px",

            "@media (max-width: 768px)": {
              textAlign: "center",
              width: "auto",
            },
        }}
      >
          {t("newsletterDescription")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          maxWidth: "486px",
          "@media (max-width: 768px)": {
            width: "100%",
            maxWidth: "100%",
          },
          "@media (max-width: 576px)": {
            flexDirection: "column",
            "& .MuiButtonBase-root": {
              width: "100%",
            },
          },
        }}
      >
        <CustomInputField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t("emailAddress")}
          borderRadius="32"
          background="white"
          type="email"
        />
        <CustomButton variant="red" type="submit" disabled={status === "loading"}>
          {status === "loading" ? t("subscribing") : t("subscribe")}
        </CustomButton>
      </Box>
      {message && (
        <Typography
          sx={{
            width: "100%",
            color: status === "success" ? "#0F973D" : "#D92D20",
            fontSize: "13px",
            fontWeight: 600,
            textAlign: { xs: "center", md: "right" },
          }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
}
