import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";

import Modal from '../modal/Modal';

interface selectionInterface {
    id: number,
    cat: string

}

const Product: React.FC = () => {

    const [openModal, setOpenModal] = useState<boolean>(false)
    const Options: selectionInterface[] = [
        {
            id: 1,
            cat: "Kitchen",
        },
        {
            id: 2,
            cat: "Parlour Essentials"
        },
        {
            id: 3,
            cat: "Kitchen Utensil"
        },
        {
            id: 4,
            cat: "Electronics"
        }
    ]

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">Products</h1>
            <div className=''>


                <div onClick={() => setOpenModal(true)} className='fixed bottom-15 right-15 md:bottom-20 md:right-20 cursor-pointer z-50 p-2 rounded-full bg-gray-500  '>
                    <span className='animate-pulse hover:animate-ping'><IoMdAdd size={50} /></span>
                </div>
            </div>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <div className=' w-full'>
                    <h1>Upload Images</h1>
                    <div>
                        <label htmlFor="Title">Title</label> <br />
                        <input type="text" required  className=' outline-1 w-full'/>
                    </div>
                    <div>
                        <label htmlFor="Title">Categories</label> <br />
                        <select name="Categories" id="Categories" className=' outline-1 w-full bg-gray-500'>
                            {Options.map(({ id, cat }) => (
                                <div>
                                    <option value="" key={id}>{cat}</option>
                                </div>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="Title">Description</label><br />
                        <textarea name="description" className=' outline-1 w-full' ></textarea>
                    </div>

                    <div className='' >
                    <div>
                        <label htmlFor="Title">Choose a file</label><br />
                        <input type="file" className=' outline-1 w-full' />
                    </div>
                        <button className='  bg-green-500 cursor-pointer p-2 mt-2 rounded'>
                            UPLOAD
                        </button>
                    </div>
                    <div className='w-full h-40'>

                    </div>
                    <button className=' bg-red-500 cursor-pointer p-2 mt-2 rounded right-0'>
                            UPLOAD
                        </button>
                </div>
            </Modal>
        </>
    )
}

export default Product