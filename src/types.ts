import { DialogProps } from "@material-ui/core/Dialog";

export interface ConfirmDialogProps extends Omit<DialogProps, "open"> {
  title: string;
  description: string;
}
