import React, { useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import Modal from '../modal/Modal';
import axios from "axios"
import { MdOutlineDeleteOutline } from "react-icons/md";
import alertModal from '../alertModal/alertModal';


interface selectionInterface {
    id: number,
    cat: string

}

const Product: React.FC = () => {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/data")
                setData(response.data);

            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct()
    })


    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openAlertModal,setOpenAlertModal]= useState<boolean>(false)

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




    function handleDelete(id: any): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <h1 className="">Products</h1>
            <div className=''>
                <div >
                    <h2>Product List</h2> 
                    {/* <ul>
                        {data.map(product => (
                            <li key={product.id}>{product.title}</li>
                        ))}
                    </ul> */}

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
  {data.map(product => (
    <div key={product.id} className='bg-gray-500 p-1 relative rounded'>
      <img src={product.image} alt={product.title} className='w-full h-56 object-cover bg-white' />
      
      <div className='p-2 text-xl text-white'>
        <h1 className='capitalize py-1 truncate'>{product.title}</h1>
        <p className='capitalize text-xs truncate'>{product.description}</p>
      </div>

      <button
        className='absolute bottom-1 right-1 bg-red-600 cursor-pointer text-white p-1 rounded-full'
        onClick={() => handleDelete(product.id)}
      >
        <MdOutlineDeleteOutline size={20} />
      </button>
    </div>
  ))}
</div>

                </div>

                <div onClick={() => setOpenModal(true)} className='fixed bottom-15 right-15 md:bottom-20 md:right-20 cursor-pointer z-50 p-2 rounded-full bg-gray-500  '>
                    <span className='animate-pulse hover:animate-ping'><IoMdAdd size={50} /></span>
                </div>
            </div>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <div className=' w-full'>
                    <h1>Upload Images</h1>
                    <div>
                        <label htmlFor="Title">Title</label> <br />
                        <input type="text" required className=' outline-1 w-full' />
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
                            Upload
                        </button>
                    </div>
                    <div className='w-full h-40'>

                    </div>
                    <button className=' bg-red-500 cursor-pointer p-2 mt-2 rounded right-0'>
                        Submit
                    </button>
                </div>
            </Modal>
            <div>
            {/* <alertModal isOpen={openAlertModal} onClose={()=>setOpenAlertModal(false)}>
                
                </alertModal> */}
            </div>
        </>
    )
}

export default Product