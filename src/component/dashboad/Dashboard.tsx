import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { FaFile } from "react-icons/fa";


const Dashboard: React.FC = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-6 text-white">
                {/* Orders */}
                <div className="bg-gray-700 w-auto h-48 rounded-lg shadow-md  justify-center items-center p-4">
                    <div className='flex justify-between text-lime-500'>
                        <p><FaFile size={28} /></p>
                        <p><CiMenuKebab size={28} /></p>
                    </div>
                    <div className='mt-10 '>
                        <p className="text-xl mt-2">All Orders</p>
                    </div>
                    <div className='mt-10 '>
                        <p className="text-xl mt-2 w-10 h-8 bg-lime-500 text-white flex justify-center items-center rounded-md">5</p>
                    </div>
                </div>

                {/* Revenue */}
                <div className="bg-gray-700 w-auto h-48 rounded-lg shadow-md  justify-center items-center p-4">
                    <div className='flex justify-between text-yellow-600'>
                        <p><FaFile size={28} /></p>
                        <p><CiMenuKebab size={28} /></p>
                    </div>
                    <div className='mt-10 '>
                        <p className="text-xl mt-2">Packaging</p>
                    </div>
                    <div className='mt-10 '>
                        <p className="text-xl mt-2 w-10 h-8 bg-yellow-600 text-white flex justify-center items-center rounded-md">5</p>
                    </div>
                </div>

                {/* Users */}
                <div className="bg-gray-700 w-auto h-48 rounded-lg shadow-md  justify-center items-center p-4">
                    <div className='flex justify-between text-blue-500'>
                        <p><FaFile size={28} /></p>
                        <p><CiMenuKebab size={28} /></p>
                    </div>
                    <div className='mt-10 '>
                        <p className="text-xl mt-2">Delivered</p>
                    </div>
                    <div className='mt-10 '>
                        <p className="text-xl mt-2 w-10 h-8 bg-blue-500 text-white flex justify-center items-center rounded-md">5</p>
                    </div>
                </div>

                {/* Visits */}
                <div className="bg-gray-700 w-auto h-48 rounded-lg shadow-md  justify-center items-center p-4">
                    <div className='flex justify-between text-orange-500'>
                        <p><FaFile size={28} /></p>
                        <p><CiMenuKebab size={28} /></p>
                    </div>
                    <div className='mt-10 '>
                        <p className="text-xl mt-2">Completed</p>
                    </div>
                    <div className='mt-10 '>
                        <p className="text-xl mt-2 w-10 h-8 bg-orange-500 text-white flex justify-center items-center rounded-md">5</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard