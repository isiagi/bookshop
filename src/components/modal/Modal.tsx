import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { MutableRefObject } from "react";

interface CreateAccountModalProps {
  initialRef: MutableRefObject<HTMLInputElement | null>;
  finalRef: MutableRefObject<HTMLInputElement | null>;
  isOpen: boolean;
  onClose: () => void;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({
  initialRef,
  finalRef,
  isOpen,
  onClose,

}) => {
  return (
    <>
    
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input ref={initialRef} placeholder="First name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
};

export default CreateAccountModal;
