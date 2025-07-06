import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const AlertModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

    

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4 text-black">
            <div className="w-96 bg-gray-200 p-4 rounded shadow-lg">
                <div className="flex justify-end">
                    <button onClick={onClose} className='cursor-pointer'>
                        <IoMdClose size={24} />
                    </button>
                </div>
                <div className="mt-5">
                    {children}
                    
                </div>
            </div>
        </div>
    );
};

export default AlertModal;