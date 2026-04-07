import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, Menu, X } from 'lucide-react';

export default function Layout() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [resendStatus, setResendStatus] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-indigo-600 font-medium' : 'text-gray-600 hover:text-gray-900';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/dashboard')}>
          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
          <span className="font-bold text-xl text-gray-900">Kairoly Planning</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
          <NavLink to="/history" className={navLinkClass}>Lịch sử</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            {currentUser?.name || currentUser?.email?.split('@')[0]}
          </span>
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
            <User className="w-4 h-4" />
          </div>
          <button onClick={handleLogout} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Đăng xuất">
            <LogOut className="w-5 h-5" />
          </button>
          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(o => !o)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-sm">
          <NavLink to="/dashboard" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>Dashboard</NavLink>
          <NavLink to="/history" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>Lịch sử</NavLink>
        </nav>
      )}

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
