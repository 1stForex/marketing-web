import { ButtonGroup, Button } from "@mui/material";
import { NavProps } from "@/src/types/Nav.interface";
import Link from "next/link";

export default function GroupButton({ currentPath, nav }: NavProps) {
  const color = nav ? "#FFF" : "#333";
  const isActive = (href: string) => currentPath === href;

  const btnStyles = (isActive: boolean) => ({
    border: "1px solid #D0D5DD",
    display: "flex",
    padding: "12px 16px",
    alignItems: "center",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20.3px",
    textTransform: "none",
    color: isActive ? "#FFF" : color,
    background: isActive ? "#F30" : "transparent",
  });

  return (
    <ButtonGroup
      sx={{
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "8px",
        "@media (max-width: 420px)": {
          width: "100%",
          "& .MuiButtonGroup-grouped": {
            minWidth: "calc(50% - 1px)",
          },
        },
      }}
    >
      <Link href="/ai-signal" passHref>
        <Button
          sx={{
            ...btnStyles(isActive("/ai-signal")),
            borderRadius: "32px 0 0 32px",
          }}
        >
          Trading Signals
        </Button>
      </Link>
      <Link href="/academy" passHref>
        <Button
          sx={{
            ...btnStyles(isActive("/academy")),
            borderRadius: "0 32px 32px 0",
          }}
        >
          Academy
        </Button>
      </Link>
    </ButtonGroup>
  );
}
