import { ButtonGroup } from "@mui/material";
import { NavProps } from "@/src/types/Nav.interface";
import BtnGroup from "./BtnGroup";

export default function GroupButton({ nav = false }: NavProps) {
  const color = nav ? "#FFF" : "#333";
  return (
    <ButtonGroup>
      <BtnGroup loc={"left"} color={color} />
      <BtnGroup loc={"right"} color={color} />
    </ButtonGroup>
  );
}
