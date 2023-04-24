import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import ModalComponent from "../modal/Modal";

function SignModel() {
  const { isOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <ModalComponent
      initialRef={initialRef}
      finalRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}

export default SignModel;
