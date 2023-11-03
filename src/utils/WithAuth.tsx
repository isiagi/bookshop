/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useToast } from "@chakra-ui/react";

function WithAuth(OriginalComponent: any) {
  function NewComponent(_props: any) {
    const toast = useToast();
    //render OriginalComponent and pass on its props.
    if (!localStorage.getItem("itemName")) {
      toast({
        title: "Missing Authentication",
        description: "Please login to continue!",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      // return;
      return window.history.back();
    }
    return <OriginalComponent />;
  }
  return NewComponent;
}

export default WithAuth;
