"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import CustomInputField from "@/src/components/CustomInputField";
import CustomButton from "@/src/components/Button";
import { postPublicForm } from "@/src/services/publicApi";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const updateField =
    (field: keyof typeof initialForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await postPublicForm("/core/contact-message/", {
        ...form,
        source: "contact-page",
      });
      setStatus("success");
      setMessage(response.detail || "Thanks. We will get back to you shortly.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Please check the form and try again."
      );
    }
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
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
            placeholder="John"
            label="First Name*"
            value={form.first_name}
            onChange={updateField("first_name")}
          />
          <CustomInputField
            placeholder="Doe"
            label="Last Name"
            value={form.last_name}
            onChange={updateField("last_name")}
          />
        </Box>
        <CustomInputField
          placeholder="john@1stforex.com"
          label="Email*"
          type="email"
          value={form.email}
          onChange={updateField("email")}
        />
        <CustomInputField
          placeholder="+1 234 569 7687"
          label="Phone"
          value={form.phone}
          onChange={updateField("phone")}
        />
        <CustomInputField
          placeholder="Account support"
          label="Subject"
          value={form.subject}
          onChange={updateField("subject")}
        />
        <CustomInputField
          placeholder="Tell us how we can help..."
          label="Message*"
          helperText="Share the key details so the team can route your request properly."
          padding="22px 16px"
          multiline
          value={form.message}
          onChange={updateField("message")}
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
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </CustomButton>
      </Box>
    </form>
  );
};

export default ContactForm;
