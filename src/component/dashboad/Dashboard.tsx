import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { FaFile } from "react-icons/fa";

const data = [
    { name: 'Orders', value: 400 },
    { name: 'Returns', value: 100 },
    { name: 'Revenue', value: 300 },
    { name: 'Others', value: 200 },
];

const COLORS = ['#0088FE', '#FF8042', '#00C49F', '#FFBB28'];


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
                        <p className="text-xl mt-2 w-10 h-8 bg-yellow-600 text-white flex justify-center items-center rounded-md">3</p>
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
                        <p className="text-xl mt-2 w-10 h-8 bg-blue-500 text-white flex justify-center items-center rounded-md">1</p>
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
                        <p className="text-xl mt-2 w-10 h-8 bg-orange-500 text-white flex justify-center items-center rounded-md">1</p>
                    </div>
                </div>
            </div>
            <div className=' grid lg:grid-cols-2 mt-3 gap-2 m-5 '>
                <div className='w-auto h-96 bg-gray-700 rounded-2xl'>
                    <h3 className='text-center text-xl my-3'>Order Status</h3>
                    <div className="w-full flex justify-center items-center p-4">
                        <PieChart width={300} height={300}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>

                </div>
                <div className='w-auto h-96 bg-gray-700 rounded-2xl'>
                    <h3 className='text-center text-xl my-3'>Top 5 selling Product</h3>
                </div>
            </div>

        </>
    )
}

export default Dashboard