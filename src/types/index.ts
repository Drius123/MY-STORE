import { ReactNode } from "react";

export enum EnumText {
  Menu = "Menu",
}

export interface BtnProps {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  children?: ReactNode;
  active?: boolean;
}
