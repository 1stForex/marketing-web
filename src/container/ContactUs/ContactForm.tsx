"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import CustomInputField from "@/src/components/CustomInputField";
import CustomButton from "@/src/components/Button";
import { postPublicForm } from "@/src/services/publicApi";
import { useTranslations } from "next-intl";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const minimumMessageLength = 20;

const ContactForm = () => {
  const t = useTranslations("Contact");
  const footerT = useTranslations("Footer");
  const [form, setForm] = useState(initialForm);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const updateField =
    (field: keyof typeof initialForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      if (status === "error") {
        setStatus("idle");
        setMessage("");
      }
    };

  const normalizedForm = {
    first_name: form.first_name.trim(),
    last_name: form.last_name.trim(),
    email: form.email.trim().toLowerCase(),
    phone: form.phone.trim(),
    subject: form.subject.trim(),
    message: form.message.trim(),
  };
  const isEmailValid = emailPattern.test(normalizedForm.email);
  const isFormValid = Boolean(
    normalizedForm.first_name &&
      isEmailValid &&
      normalizedForm.message.length >= minimumMessageLength
  );
  const showEmailError =
    emailTouched && normalizedForm.email.length > 0 && !isEmailValid;
  const showMessageError =
    messageTouched &&
    normalizedForm.message.length > 0 &&
    normalizedForm.message.length < minimumMessageLength;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailTouched(true);
    setMessageTouched(true);

    if (!isFormValid || status === "loading") {
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await postPublicForm("/core/contact-message/", {
        ...normalizedForm,
        source: "contact-page",
      });
      setStatus("success");
      setMessage(response.detail || t("success"));
      setForm(initialForm);
      setEmailTouched(false);
      setMessageTouched(false);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : t("error")
      );
    }
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit} noValidate>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
          "@media (max-width: 768px)": {
            gap: "18px",
          },
          "@media (max-width: 576px)": {
            gap: "16px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "16px",
            },
          }}
        >
          <CustomInputField
            placeholder={t("firstNamePlaceholder")}
            label={t("firstName")}
            value={form.first_name}
            onChange={updateField("first_name")}
            required
          />
          <CustomInputField
            placeholder={t("lastNamePlaceholder")}
            label={t("lastName")}
            value={form.last_name}
            onChange={updateField("last_name")}
          />
        </Box>
        <CustomInputField
          placeholder={t("emailPlaceholder")}
          label={t("email")}
          type="email"
          value={form.email}
          onChange={updateField("email")}
          onBlur={() => setEmailTouched(true)}
          helperText={showEmailError ? footerT("invalidEmail") : undefined}
          error={showEmailError}
          required
        />
        <CustomInputField
          placeholder={t("phonePlaceholder")}
          label={t("phone")}
          value={form.phone}
          onChange={updateField("phone")}
        />
        <CustomInputField
          placeholder={t("subjectPlaceholder")}
          label={t("subject")}
          value={form.subject}
          onChange={updateField("subject")}
        />
        <CustomInputField
          placeholder={t("messagePlaceholder")}
          label={t("message")}
          helperText={showMessageError ? t("messageTooShort") : t("messageHelper")}
          padding="22px 16px"
          multiline
          value={form.message}
          onChange={updateField("message")}
          onBlur={() => setMessageTouched(true)}
          error={showMessageError}
          required
        />

        {message && (
          <Typography
            sx={{
              color: status === "success" ? "#0F973D" : "#D92D20",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            {message}
          </Typography>
        )}

        <CustomButton
          borderRadius="8px"
          width="100%"
          type="submit"
          disabled={!isFormValid || status === "loading"}
        >
          {status === "loading" ? t("sending") : t("submit")}
        </CustomButton>
      </Box>
    </form>
  );
};

export default ContactForm;
