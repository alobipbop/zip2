import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

export default function Layout() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [resendStatus, setResendStatus] = useState('');

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handleResendVerification = async () => {
    if (currentUser) {
      try {
        setResendStatus('Verification email sent!');
        setTimeout(() => setResendStatus(''), 3000);
      } catch (error) {
        setResendStatus('Failed to send email. Try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/dashboard')}>
          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          <span className="font-bold text-xl text-gray-900">Kairoly Planning</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-gray-900"}>Dashboard</NavLink>
          <NavLink to="/history" className={({ isActive }) => isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-gray-900"}>Lịch sử</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            {currentUser?.displayName || currentUser?.email?.split('@')[0]}
          </span>
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
            <User className="w-4 h-4" />
          </div>
          <button onClick={handleLogout} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Đăng xuất">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        {!currentUser?.emailVerified && (
          <div className="bg-yellow-50 border-b border-yellow-200 p-4">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-yellow-800">
                Vui lòng xác thực email của bạn để sử dụng đầy đủ tính năng.
                {resendStatus && <span className="ml-2 font-semibold">{resendStatus}</span>}
              </p>
              <button
                onClick={handleResendVerification}
                className="text-sm font-medium text-yellow-800 underline hover:text-yellow-900"
              >
                Gửi lại email xác thực
              </button>
            </div>
          </div>
        )}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
