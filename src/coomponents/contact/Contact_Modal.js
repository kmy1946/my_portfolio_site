import React from "react";
import { useModal } from 'react-hooks-use-modal';
import { Button } from "@chakra-ui/react";
import Contact from "./Contact";

function Contact_Modal() {
  const [Modal, open, close, isOpen] = useModal('root',{
    preventScroll: true,
  });
  return (
    <div>
    <div className="contact_dialog_open">
        <Button size='xs' bgColor='green.100' borderColor='green.100' height='40px' width='40px' borderRadius='40px' _hover={{bg: 'green.300', borderColor:'green.300'}} onClick={open} color='gray'>
          Dialog
        </Button>
        <Modal>
          <Button size='xs' bgColor='orange.300' borderColor='orange.300' _hover={{bg: 'orange.400', borderColor:'orange.400'}} onClick={close}>
            Close
          </Button>
          <Contact />
        </Modal>
    </div>
  </div>
  )
}
export default Contact_Modal