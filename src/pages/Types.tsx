import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';

export default function Types() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <Tag className="w-8 h-8 text-indigo-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Phân loại (Types)</h1>
      <p className="text-gray-600 mb-8">
        Phân loại được quản lý trực tiếp trong từng kế hoạch (Goal).
        Vào tab <strong>Phân loại</strong> khi tạo hoặc chỉnh sửa một Goal để thêm, sửa, xóa types.
      </p>
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
      >
        Về Dashboard
      </Link>
    </div>
  );
}
