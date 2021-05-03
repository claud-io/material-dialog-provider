import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@material-ui/core";
import React from "react";
import { ConfirmDialogProps } from "../types";

export const ConfirmDialog: React.FC<
  ConfirmDialogProps & {
    open: boolean;
    onCancel: () => void;
    onConfirm: () => void;
  }
> = ({ title, description, open, onCancel, onConfirm, ...rest }) => {
  return (
    <Dialog aria-labelledby="confirmation-dialog-title" open={open} {...rest}>
      <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
