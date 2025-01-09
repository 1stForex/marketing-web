import { Box } from "@mui/material";
import CustomInputField from "@/src/components/CustomInputField";
import CustomButton from "@/src/components/Button";

const ContactForm = () => {
  return (
    <form style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <CustomInputField placeholder="John" label="First Name*" />
          <CustomInputField placeholder="Doe" label="Last Name" />
        </Box>
        <CustomInputField placeholder="john@1stforex.com" label="Email*" />
        <CustomInputField placeholder="+1 234 56977687 0" label="Phone*" />
        <CustomInputField placeholder="New Account" label="Subject" />
        <CustomInputField
          placeholder="Enter text here..."
          label="Message*"
          helperText="Keep this simple of 50 character"
          padding="22px 16px"
          multiline
        />

        <CustomButton borderRadius="8px" width="100%">
          Submit
        </CustomButton>
      </Box>
    </form>
  );
};

export default ContactForm;
