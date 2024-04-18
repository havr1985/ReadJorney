import Modal from "react-modal";
import { X } from "lucide-react";
import { FC, ReactNode } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 12,
    background: "#1F1F1F",
    border: "none",
    
  },
  overlay: {
    backgroundColor: "#14141490",
  },
};

interface ICustomModalProps {
  modalIsOpen: boolean;
  closeModal(event: React.MouseEvent | React.KeyboardEvent): void;
  children: ReactNode;
}

export const CustomModal: FC<ICustomModalProps> = ({
  modalIsOpen,
  closeModal,
  children,
}) => {
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal}
      style={customStyles}
      closeTimeoutMS={450}
    >
      <div className=" w-[275px] relative py-10 md:w-[500px]">
        <button onClick={() => closeModal} className=" absolute top-0 right-2">
          <X size={16} className=" text-prim-color md:w-6 md:h-6" />
        </button>
        {children}
      </div>
    </Modal>
  );
};
