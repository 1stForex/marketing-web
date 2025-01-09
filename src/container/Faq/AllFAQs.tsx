import { Box, Typography } from "@mui/material";
import CustomInputField from "@/src/components/CustomInputField";
import Search from "@/src/assets/icons/search.svg";
import Topics from "./Topics";
import FAQQuestion from "@/src/components/FAQQuestion";
import { allQuestions } from "../../const/allQuestions";

const AllFAQs = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <CustomInputField
        placeholder="What do you need help with?"
        icon={Search}
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
          }}
        >
          All FAQ's
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
