import { Box, Typography } from "@mui/material";
import CustomInputField from "@/src/components/CustomInputField";
import SearchGrey from "@/src/assets/icons/search-grey.svg";
import Topics from "./Topics";
import FAQQuestion from "@/src/components/FAQQuestion";
import { allQuestions } from "../../const/allQuestions";

const AllFAQs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        "@media (max-width: 768px)": {
          gap: "30px",
        },
        "@media (max-width: 576px)": {
          gap: "20px",
        },
      }}
    >
      <CustomInputField
        placeholder="What do you need help with?"
        icon={SearchGrey}
      />

      <Topics />

      <Box mt={5}>
        <Typography
          sx={{
            color: "var(--Shade-Black, #000)",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "-1.92px",
            mb: "60px",
            "@media (max-width: 768px)": {
              fontSize: "40px",
              letterSpacing: "-1.28px",
              mb: "40px",
            },
            "@media (max-width: 576px)": {
              fontSize: "32px",
              lineHeight: "120%",
              letterSpacing: "-0.64px",
              mb: "32px",
            },
          }}
        >
          All FAQ&#39;s
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {allQuestions.map((question, index) => (
            <FAQQuestion
              question={question.question}
              answer={question.answer}
              key={index}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AllFAQs;
