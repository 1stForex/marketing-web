import { Box } from "@mui/material";

type LocaleFlagProps = {
  flagCode: string;
};

export default function LocaleFlag({ flagCode }: LocaleFlagProps) {
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
