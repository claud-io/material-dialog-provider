import { createContext } from "react";
import { ConfirmDialogProps } from "../types";

export const ModalContext = createContext<{
  confirm?: (props: ConfirmDialogProps) => Promise<any>;
}>({});
