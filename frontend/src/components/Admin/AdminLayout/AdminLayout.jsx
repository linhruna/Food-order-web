import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBoxes, FaClipboardList, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../../contexts/AuthContext';

const AdminLayout = ({ children }) => {
  const { logout, user } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
      window.location.href = '/';
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-[#8B4513] to-[#654321] text-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-amber-200">Admin Panel</h1>
          <p className="text-sm text-gray-300 mt-2">Foodie Frenzy</p>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          <Link
            to="/admin"
            className={`flex items-center px-6 py-3 transition ${
              isActive('/admin')
                ? 'bg-amber-600/50 border-l-4 border-amber-400 text-amber-100'
                : 'hover:bg-[#7A3F0F] text-gray-200'
            }`}
          >
            <FaHome className="mr-3" size={18} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/admin/add-items"
            className={`flex items-center px-6 py-3 transition ${
              isActive('/admin/add-items')
                ? 'bg-amber-600/50 border-l-4 border-amber-400 text-amber-100'
                : 'hover:bg-[#7A3F0F] text-gray-200'
            }`}
          >
            <FaBoxes className="mr-3" size={18} />
            <span>Add Items</span>
          </Link>

          <Link
            to="/admin/list-items"
            className={`flex items-center px-6 py-3 transition ${
              isActive('/admin/list-items')
                ? 'bg-amber-600/50 border-l-4 border-amber-400 text-amber-100'
                : 'hover:bg-[#7A3F0F] text-gray-200'
            }`}
          >
            <FaClipboardList className="mr-3" size={18} />
            <span>List Items</span>
          </Link>

          <Link
            to="/admin/orders"
            className={`flex items-center px-6 py-3 transition ${
              isActive('/admin/orders')
                ? 'bg-amber-600/50 border-l-4 border-amber-400 text-amber-100'
                : 'hover:bg-[#7A3F0F] text-gray-200'
            }`}
          >
            <FaClipboardList className="mr-3" size={18} />
            <span>Orders</span>
          </Link>
        </nav>


      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back, {user?.username || 'Admin'}!
          </h2>
          <p className="text-gray-500 text-sm">Manage your restaurant inventory and orders</p>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
