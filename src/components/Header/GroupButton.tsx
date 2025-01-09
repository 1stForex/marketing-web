import { ButtonGroup } from "@mui/material";
import BtnGroup from "./BtnGroup";

interface GroupButtonProps {
  nav?: boolean;
}

export default function GroupButton({ nav = false }: GroupButtonProps) {
  const color = nav ? "#FFF" : "#333";
  return (
    <ButtonGroup>
      <BtnGroup loc={"left"} color={color} />
      <BtnGroup loc={"right"} color={color} />
    </ButtonGroup>
  );
}
