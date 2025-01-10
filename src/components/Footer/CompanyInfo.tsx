"use client";

import { Box, Divider, useMediaQuery } from "@mui/material";
import Copyright from "./Copyright";
import DownloadLinks from "./DownloadLinks";

export default function CompanyInfo() {
  const isMobile = useMediaQuery("(max-width: 680px)");
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
        },
      }}
    >
      <Copyright />
      {isMobile && (
        <Divider
          sx={{
            width: "100%",
            borderColor: "#F0F2F5",
            borderWidth: "1px",
            marginY: "24px",
          }}
        />
      )}
      <DownloadLinks />
    </Box>
  );
}
