import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Landing() {
  const { currentUser, isAuthReady } = useAuth();

  if (!isAuthReady) return null;
  if (currentUser) return <Navigate to="/dashboard" replace />;
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-900 rounded-full"></div>
          <span className="font-bold text-xl">Kairoly Planning</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Hướng dẫn</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Khác</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors">Đăng nhập</Link>
          <Link to="/register" className="px-6 py-2 bg-emerald-400 text-white font-medium rounded-md hover:bg-emerald-500 transition-colors">Đăng ký</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-indigo-100/40 py-24 px-8 flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Bạn biết mình phải làm.<br />Đừng tỏ ra bận rộn.
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Công cụ giúp bạn lập kế hoạch tháng, theo dõi tiến độ và nhìn rõ mình đang đi đến đâu.
          </p>
          <Link to="/register" className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-sm hover:shadow-md transition-all border border-gray-100">
            Bắt đầu ngay
          </Link>
        </div>
        <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-indigo-500 to-emerald-400 rounded-3xl transform rotate-12 shadow-2xl opacity-90"></div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Bạn có đang rơi vào những điều này?</h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Bạn đã lập được kế hoạch, nhưng không theo được đến cùng<br />
          Kế hoạch ghi ở nhiều nơi, khó để theo dõi và tổng kết<br />
          Không biết mình có thực sự tiến bộ hay không<br />
          Thiếu động lực vì không nhìn thấy kết quả rõ ràng
        </p>

        <div className="w-24 h-1 bg-gray-200 mx-auto mb-16"></div>

        <h3 className="text-2xl font-semibold mb-16 text-gray-800">Kairoly được tạo ra để giải quyết chính những điều đó.</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Lập kế hoạch tháng rõ ràng', desc: 'Chia mục tiêu lớn thành các nhiệm vụ cụ thể theo tuần/ngày.' },
            { title: 'Theo dõi tiến độ định lượng', desc: 'Xem % hoàn thành và số liệu thực tế thay vì cảm giác mơ hồ.' },
            { title: 'Báo cáo tổng kết tự động', desc: 'Không cần ngồi tổng hợp thủ công cuối tháng.' },
            { title: 'Lưu trữ quá trình phát triển', desc: 'So sánh các tháng để thấy mình đã thay đổi như thế nào.' }
          ].map((f, i) => (
            <div key={i} className="bg-emerald-50/60 p-8 rounded-2xl text-left border border-emerald-100/50 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-xl mb-4 text-emerald-950">{f.title}</h4>
              <p className="text-emerald-800/80 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 px-8 text-center bg-gray-50 border-t border-gray-100">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Bắt đầu ngay</h2>
        <Link to="/register" className="inline-block px-10 py-4 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          Đăng ký
        </Link>
      </section>
    </div>
  );
}
