import { HTMLAttributes } from "react";

export interface TabsProps {
  labelList: string[];
}

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  active?: boolean;
}
