import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Bull from "@/src/assets/images/Bull.png";
import Logo from "@/src/assets/icons/logo.svg";

export default function AboutSection() {
  const typographyStyle = {
    color: "#000",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "-0.4px",

    "@media (max-width: 576px)": {
      fontSize: "16px",
    },
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "21px",
          alignItems: "flex-start",
          marginBottom: "27px",
        }}
      >
        <Box
          sx={{
            background: "#F30",
            borderRadius: "12px",
            padding: "4px 12px",
          }}
        >
          <Image src={Logo} alt="logo" />
        </Box>
        <Typography
          sx={{
            color: "#333",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "100%",
            letterSpacing: "-1.92px",

            "@media (max-width: 768px)": {
              fontSize: "38px",
            },

            "@media (max-width: 576px)": {
              fontSize: "28px",
            },
          }}
        >
          About Us
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "95px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              ...typographyStyle,
            }}
          >
            Founded in Montreal over{" "}
            <span style={{ color: "#F30" }}>20 years ago</span>, 1st Forex has
            grown to become a global leader in forex education and trading
            signals. From humble beginnings conducting in-person seminars and
            offering web-based forex signals, we’ve evolved into a trusted name
            in the industry with over{" "}
            <span style={{ color: "#F30" }}>1,000 satisfied customers</span>{" "}
            worldwide.
          </Typography>
          <Typography
            sx={{
              ...typographyStyle,
            }}
          >
            Today, headquartered in the vibrant city of{" "}
            <span style={{ color: "#F30" }}>Dubai</span>, United Arab Emirates,
            we continue to empower traders to achieve financial independence and
            master the forex markets
          </Typography>
          <Typography
            sx={{
              ...typographyStyle,
            }}
          >
            At the heart of 1st Forex is our{" "}
            <span style={{ color: "#F30" }}>CEO, Luc Verville</span>, a seasoned
            trader with over{" "}
            <span style={{ color: "#F30" }}>22 years of experience</span> in the
            forex industry. Driven by a dream to build the world’s best forex
            company and foster a real community of apex traders, Luc’s vision
            has shaped every aspect of 1st Forex.
          </Typography>
          <Typography
            sx={{
              ...typographyStyle,
            }}
          >
            He is supported by an exceptional team, including experienced
            traders and a leading{" "}
            <span style={{ color: "#F30" }}>AI expert</span>, ensuring our
            offerings remain cutting-edge and unparalleled in the industry.
          </Typography>
        </Box>
        <Box
          sx={{
            "@media (max-width: 992px)": {
              display: "none",
            },
          }}
        >
          <Image src={Bull} alt="Image" width={416} height={416} />
        </Box>
      </Box>
    </Box>
  );
}
