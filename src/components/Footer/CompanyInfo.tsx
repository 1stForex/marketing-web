import { Box } from "@mui/material";
import Copyright from "./Copyright";
import DownloadLinks from "./DownloadLinks";

export default function CompanyInfo() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",

        "@media (max-width: 680px)": {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column-reverse",
          gap: "1rem",
        },
      }}
    >
      <Copyright />
      <DownloadLinks />
    </Box>
  );
}
