import { createContext } from "react";
import { ConfirmDialogProps } from "../types";

export const ConfirmDialogContext = createContext<{
  confirm?: (props: ConfirmDialogProps) => Promise<any>;
}>({});
