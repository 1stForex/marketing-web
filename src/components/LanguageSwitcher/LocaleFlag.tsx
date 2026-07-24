import { Box } from "@mui/material";

type LocaleFlagProps = {
  flagCode: string;
};

export default function LocaleFlag({ flagCode }: LocaleFlagProps) {
  if (flagCode === "sa") {
    return (
      <Box
        component="span"
        aria-hidden="true"
        sx={{
          width: 20,
          height: 20,
          flexShrink: 0,
          display: "grid",
          placeItems: "center",
          fontSize: 18,
          lineHeight: 1,
        }}
      >
        🇸🇦
      </Box>
    );
  }

  return (
    <Box
      component="img"
      src={`/flags/${flagCode}.svg`}
      alt=""
      aria-hidden="true"
      sx={{ width: 20, height: 20, flexShrink: 0, display: "block" }}
    />
  );
}
