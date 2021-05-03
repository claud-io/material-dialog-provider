import { DialogProps } from "@material-ui/core/Dialog";

export interface ConfirmDialogProps extends DialogProps {
  title: string;
  description: string;
}
