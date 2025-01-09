import { Button, ButtonGroup } from "@mui/material";
import Link from "next/link";

interface GroupButtonProps {
  nav?: boolean;
}

export default function GroupButton({ nav = false }: GroupButtonProps) {
  const color = nav ? "#FFF" : "#333";
  return (
    <ButtonGroup>
      <Link href="#">
        <Button
          sx={{
            borderRadius: "32px 0 0 32px",
            borderTop: "1px solid #D0D5DD",
            borderBottom: "1px solid #D0D5DD",
            borderLeft: "1px solid #D0D5DD",
            display: "flex",
            padding: "12px 16px",
            alignItems: "center",
            gap: "4px",
            color,
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "20.3px",
            fontFamily: "inherit",
            textTransform: "none",
          }}
        >
          1st Forex AI Signal
        </Button>
      </Link>
      <Link href="#">
        <Button
          sx={{
            borderRadius: "0 32px 32px 0",
            border: "1px solid #D0D5DD",
            display: "flex",
            padding: "12px 16px",
            alignItems: "center",
            gap: "8px",
            color,
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "20.3px",
            fontFamily: "inherit",
            textTransform: "none",
          }}
        >
          1st Forex Academy
        </Button>
      </Link>
    </ButtonGroup>
  );
}
