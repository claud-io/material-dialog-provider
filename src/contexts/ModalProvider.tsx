import React, { useState, useRef } from "react";
import { ModalContext } from ".";
import { ConfirmDialog } from "../components/ConfirmDialog";

interface ModalProviderProps {
  banana?: string;
}

const initialState = {
  open: false,
  title: "",
  description: "",
};

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalProps, setModalProps] = useState(initialState);
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
    <ModalContext.Provider value={{ confirm }}>
      {children}
      <ConfirmDialog
        {...modalProps}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
