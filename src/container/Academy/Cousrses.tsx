import { Box, Typography } from "@mui/material";
import Badge from "@/src/components/Badge";
import CourseCard from "./CourseCard";
import CustomButton from "@/src/components/Button";

const Courses = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Badge title="Learn" />

      <Typography
        sx={{
          color: "var(--Grey-900, #333)",
          fontSize: "48px",
          fontWeight: 700,
          lineHeight: "100%",
          letterSpacing: "-1.92px",
          mt: "21px",
          mb: "56px",
        }}
      >
        Our{" "}
        <span style={{ color: "var(--primary-400-base, #F30)" }}>Courses</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "24px",
          mb: "64px",
        }}
      >
        <CourseCard
          title="Free Basic Forex Course"
          price={0.0}
          description="Perfect for beginners looking to get started with forex trading"
          rating={5}
          reviews={91}
        />
        <CourseCard
          title="Complete Forex Course"
          price={39.99}
          description="For just $39.99, gain access to our full course, including the exclusive Breakout System, quizzes, and interactive modules."
          rating={5}
          reviews={91}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          borderRadius: "32px",
          background: "var(--primary-400-base, #F30)",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <Typography
          sx={{
            color: "var(--Shade-White, #FFF)",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "120%",
            letterSpacing: "-0.4px",
            maxWidth: "880px",
          }}
        >
          🎁 Refer 3 friends to the free course, and receive the complete course
          absolutely free!
        </Typography>

        <CustomButton variant="black">Sign Up</CustomButton>
      </Box>
    </Box>
  );
};

export default Courses;
