import React from 'react'

const Order:React.FC = () => {
  return (
    <>
    <h1 className="text-2xl font-semibold mb-4">Orders</h1>

<div className="overflow-x-auto">
  <table className="min-w-full table-auto border border-gray-300">
    <thead className="">
      <tr>
        <th className="px-4 py-2 text-left border">Order ID</th>
        <th className="px-4 py-2 text-left border">Order Date</th>
        <th className="px-4 py-2 text-left border">Status</th>
        <th className="px-4 py-2 text-left border">Total Price</th>
        <th className="px-4 py-2 text-left border">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr className="">
        <td className="px-4 py-2 border">12JDJFLSHRUJFJDSF</td>
        <td className="px-4 py-2 border">2025-05-09 00:01:29</td>
        <td className="px-4 py-2 border text-yellow-600 font-medium">Processing</td>
        <td className="px-4 py-2 border">$129.99</td>
        <td className="px-4 py-2 border text-blue-600 hover:underline cursor-pointer">View</td>
      </tr>
      <tr className="">
        <td className="px-4 py-2 border">12JDJFLSHRUJFJDSF</td>
        <td className="px-4 py-2 border">2025-05-09 00:01:29</td>
        <td className="px-4 py-2 border text-blue-600 font-medium">Completed</td>
        <td className="px-4 py-2 border">$129.99</td>
        <td className="px-4 py-2 border text-blue-600 hover:underline cursor-pointer">View</td>
      </tr>
    </tbody>
  </table>
</div>

    </>
  )
}

export default Order