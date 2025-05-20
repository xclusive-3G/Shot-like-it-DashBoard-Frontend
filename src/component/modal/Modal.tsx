import React from 'react'
import { IoMdClose } from "react-icons/io";


interface modalProps{
 isOpen:boolean,
 onClose: ()=>void,
 children:React.ReactNode
}


const Modal:React.FC<modalProps> = ({isOpen,onClose,children}) => {
    if(!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full'>
        
        <div className='bg-gray-500 p-6 rounded-lg shadow-lg max-w-md w-full h-2/3 relative'>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-200 hover:text-red-500 text-xl cursor-pointer"
        >
          <IoMdClose size={30}/>
        </button>
        <div>{children}</div>
        </div>

    </div>
  )
}

export default Modal