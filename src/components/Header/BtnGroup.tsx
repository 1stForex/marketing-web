import { Button } from "@mui/material";
import { BtnGroupProp } from "@/src/types/BtnGroup.interface";
import Link from "next/link";

export default function BtnGroup({ loc, color }: BtnGroupProp) {
  const commonStyles = {
    border: "1px solid #D0D5DD",
    display: "flex",
    padding: "12px 16px",
    alignItems: "center",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20.3px",
    textTransform: "none",
    color,
  };

  return loc === "left" ? (
    <Link href="#">
      <Button
        sx={{
          ...commonStyles,
          borderRadius: "32px 0 0 32px",
          gap: "4px",
        }}
      >
        1st Forex AI Signal
      </Button>
    </Link>
  ) : (
    <Link href="#">
      <Button
        sx={{
          ...commonStyles,
          borderRadius: "0 32px 32px 0",
          gap: "8px",
        }}
      >
        1st Forex Academy
      </Button>
    </Link>
  );
}
