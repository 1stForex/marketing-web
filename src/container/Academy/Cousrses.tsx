import { Box, Typography } from "@mui/material";
import Badge from "@/src/components/Badge";
import CourseCard from "./CourseCard";
import CustomButton from "@/src/components/Button";
import FreeCourse from "@/src/assets/images/basic.png";
import AdvanceCourse from "@/src/assets/images/advance.png";
import HeadTypography from "@/src/styled/HeadTypography";
import Link from "next/link";
import { RedirectUrls } from "@/src/const/Enum";

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

      <HeadTypography
        sx={{
          color: "#333",
          mt: "21px",
          mb: "56px",
          "@media (max-width: 768px)": {
            mb: "48px",
          },
          "@media (max-width: 576px)": {
            mb: "40px",
          },
        }}
      >
        Our{" "}
        <span style={{ color: "var(--primary-400-base, #F30)" }}>Courses</span>
      </HeadTypography>

      <Box
        sx={{
          display: "flex",
          gap: "24px",
          mb: "64px",
          "@media (max-width: 992px)": {
            flexDirection: "column",
            mb: "56px",
          },

          "@media (max-width: 768px)": {
            mb: "48px",
          },

          "@media (max-width: 576px)": {
            mb: "40px",
          },
        }}
      >
        <CourseCard
          title="Free Basic Forex Course"
          price={0.0}
          description="Perfect for beginners looking to get started with forex trading."
          rating={5}
          reviews={91}
          image={FreeCourse}
        />
        <CourseCard
          title="Complete Forex Course"
          price={39.99}
          description="For just $39.99, gain access to our full course, including the exclusive Breakout System, quizzes, and interactive modules."
          rating={5}
          reviews={91}
          image={AdvanceCourse}
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
          gap: "16px",

          "@media (max-width: 576px)": {
            padding: "12px 20px",
            flexDirection: "column",
            gap: "8px",
          },
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

            "@media (max-width: 768px)": {
              fontSize: "18px ",
            },

            "@media (max-width: 576px)": {
              fontSize: "16px ",
            },
          }}
        >
          🎁 Refer 3 friends to the free course, and receive the complete course
          absolutely free!
        </Typography>

        <Box
          flexShrink={0}
          component={Link}
          href={RedirectUrls.REGISTER_URL}
          passHref
        >
          <CustomButton variant="black">Sign Up</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
