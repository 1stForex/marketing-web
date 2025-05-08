import { Box } from "@mui/material";
import CustomButton from "@/src/components/Button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <Link href="/ai-signal" passHref>
        <CustomButton variant="red">AI Signal</CustomButton>
      </Link>
      <Link href="/academy" passHref>
        <CustomButton variant="transparent">Academy</CustomButton>
      </Link>
    </Box>
  );
};

export default CtaSection;
