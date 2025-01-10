import { Box } from "@mui/material";
import forexLogo from "../../assets/images/forex-logo.png";
import Image from "next/image";
import NavLinks from "./NavLinks";
import GroupButton from "./GroupButton";
import OptionMenu from "./OptionMenu";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 40px",
        marginBottom: "30px",

        "@media (max-width: 1400px)": {
          padding: "0 20px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "24px 0",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          alignSelf: "stretch",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <Image
            src={forexLogo}
            alt="Forex Logo"
            loading="lazy"
            width={122}
            height={24}
          />
          <Box
            sx={{
              "@media (max-width: 1350px)": {
                display: "none",
              },
            }}
          >
            <GroupButton />
          </Box>
          <Box
            sx={{
              "@media (max-width: 1350px)": {
                display: "none",
              },
            }}
          >
            <NavLinks />
          </Box>
          <OptionMenu />
        </Box>
      </Box>
    </Box>
  );
}
