import React, { useState, useRef } from "react";
import { ConfirmDialogContext } from ".";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { ConfirmDialogProps } from "../types";

const initialState = {
  open: false,
  title: "",
  description: "",
};

const ConfirmDialogProvider: React.FC = ({ children }) => {
  const [modalProps, setModalProps] = useState<ConfirmDialogProps>(
    initialState
  );
  const promiseRef = useRef<{
    resolve: (value?: any) => void;
    reject: () => void;
  }>();

  const confirm = (options: any) => {
    setModalProps({ open: true, ...options });
    return new Promise((resolve, reject) => {
      promiseRef.current = { resolve, reject };
    });
  };

  const onCancel = () => {
    if (promiseRef.current) {
      promiseRef.current.reject();
    }
    setModalProps(initialState);
  };

  const onConfirm = () => {
    if (promiseRef.current) {
      promiseRef.current.resolve();
    }
    setModalProps(initialState);
  };

  return (
    <ConfirmDialogContext.Provider value={{ confirm }}>
      {children}
      <ConfirmDialog
        {...modalProps}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </ConfirmDialogContext.Provider>
  );
};

export default ConfirmDialogProvider;
