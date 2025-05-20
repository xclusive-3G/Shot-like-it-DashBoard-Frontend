import React from 'react';

interface OrderType {
  id: string;
  date: string;
  status: string;
  total: string;
}

const orders: OrderType[] = [
  {
    id: '12JDJFLSHRUJFJDSF',
    date: '2025-05-09 00:01:29',
    status: 'Processing',
    total: '$129.99',
  },
  {
    id: '45FDGJDLKJREWQ789',
    date: '2025-05-10 15:24:10',
    status: 'Shipped',
    total: '$89.50',
  },
  {
    id: '78JKDLSAJDHGUEQ22',
    date: '2025-05-11 09:12:45',
    status: 'Delivered',
    total: '$45.00',
  },
];

const Order: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>

      {/* Mobile View */}
      <div className="space-y-4 md:hidden">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 shadow-sm text-sm"
          >
            <p><span className="font-semibold">Order ID:</span> {order.id}</p>
            <p><span className="font-semibold">Order Date:</span> {order.date}</p>
            <p>
              <span className="font-semibold">Status:</span>{' '}
              <span className="text-yellow-600 font-medium">{order.status}</span>
            </p>
            <p><span className="font-semibold">Total Price:</span> {order.total}</p>
            <p className="text-blue-600 hover:underline cursor-pointer mt-2">
              View
            </p>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left border">Order ID</th>
              <th className="px-4 py-2 text-left border">Order Date</th>
              <th className="px-4 py-2 text-left border">Status</th>
              <th className="px-4 py-2 text-left border">Total Price</th>
              <th className="px-4 py-2 text-left border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 hover:text-black">
                <td className="px-4 py-2 border">{order.id}</td>
                <td className="px-4 py-2 border">{order.date}</td>
                <td className="px-4 py-2 border text-yellow-600 font-medium">{order.status}</td>
                <td className="px-4 py-2 border">{order.total}</td>
                <td className="px-4 py-2 border text-blue-600 hover:underline cursor-pointer">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
