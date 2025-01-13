import { Box } from "@mui/material";
import CustomButton from "@/src/components/Button";

const CtaSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <CustomButton variant="red">Label</CustomButton>
      <CustomButton variant="transparent">Label</CustomButton>
    </Box>
  );
};

export default CtaSection;
