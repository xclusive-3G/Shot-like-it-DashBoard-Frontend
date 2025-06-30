import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <div className="w-1/5 h-screen bg-gray-700  text-white p-4 hidden md:block ">
      <div className="text-xl font-bold mb-6">Shop Like It Dashboard</div>
      <ul className="space-y-2">
        <div>
        <Link to="/dashboard" ><li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
        </Link>
        </div>
        <div><Link to="/order"><li className="hover:text-gray-300 cursor-pointer">Order</li>
        </Link></div>
        <div><Link to="/Products"><li className="hover:text-gray-300 cursor-pointer">Products</li>
        </Link></div>
        <div><Link to="/Logout"><li className="hover:text-gray-300 cursor-pointer">Logout</li>
        </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
