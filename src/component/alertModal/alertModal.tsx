import React, {useState} from 'react'
import { IoMdClose } from "react-icons/io";


interface modalProp {
    isOpen:boolean,
    onClose:()=>void,
    childhren: React.ReactNode
}

const alertModal:React.FC <modalProp>= ({isOpen,onClose,childhren}) => {

    if(!isOpen){
        return null
    }

  return (
    <div>
        <div>
            <button onClick={()=>onClose}>
                <IoMdClose/>
            </button>
            <div>
                {childhren}
            </div>

        </div>
    </div>
  )
}

export default alertModal