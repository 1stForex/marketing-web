"use client";
import Badge from "@/src/components/Badge";
import { Box } from "@mui/material";
import CustomButton from "@/src/components/Button";
import { useRouter } from "next/navigation";
import CustomAccordian from "../CustomAccordian";
import HeadTypography from "@/src/styled/HeadTypography";
import { useTranslations } from "next-intl";
import { FAQQuestionProps } from "@/src/types/FAQQuestion.interface";

const FAQSection = () => {
  const router = useRouter();
  const t = useTranslations("Faq");
  const previewQuestions = Object.values(
    t.raw("questions") as Record<
      string,
      Omit<FAQQuestionProps, "points"> & { points?: Record<string, string> }
    >
  )
    .slice(0, 4)
    .map((question) => ({
      ...question,
      points: question.points ? Object.values(question.points) : undefined,
    }));

  const handleReadFAQNavigation = () => {
    router.push("/faq");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "48px",
        "@media (max-width: 576px)": {
          gap: "32px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          "@media (max-width: 992px)": {
            gap: "20px",
          },
          "@media (max-width: 576px)": {
            gap: "16px",
          },
        }}
      >
        <Badge title={t("knowledgeBase")} />

        <HeadTypography
          sx={{
            color: "var(--Grey-900, #333)",
            textAlign: "center",
            "@media (max-width: 576px)": {
              lineHeight: "120%",
            },
          }}
        >
          {t("allFaqs")}
        </HeadTypography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "24px",
          "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
            gap: "16px",
          },
        }}
      >
        {previewQuestions.map((question) => (
          <CustomAccordian
            key={question.question}
            title={question.question}
            summary={question.answer}
            subSummary={question.subDescription}
            summaryPoints={question.points}
            summaryPointsOrdered={question.ordered}
            extra={question.extra}
          />
        ))}
      </Box>

      <CustomButton onClick={handleReadFAQNavigation}>
        {t("readMore")}
      </CustomButton>
    </Box>
  );
};

export default FAQSection;
