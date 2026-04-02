import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser, token, login } = useAuth();

  const handleNext = async () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Save profile and finish
      if (currentUser) {
        setLoading(true);
        try {
          const response = await fetch(`/api/auth/${currentUser.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name,
              gender,
              age: dob ? new Date().getFullYear() - new Date(dob).getFullYear() : null,
              onboarding_completed: true
            })
          });

          if (response.ok) {
            login(
              {
                ...currentUser,
                name,
                onboarding_completed: true
              },
              token || ''
            );
            navigate('/dashboard');
          } else {
            alert('Lỗi khi lưu thông tin. Vui lòng thử lại.');
          }
        } catch (error) {
          console.error('Error saving profile:', error);
          alert('Lỗi kết nối mạng. Vui lòng thử lại.');
        } finally {
          setLoading(false);
        }
      } else {
        navigate('/dashboard');
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="max-w-2xl w-full text-center space-y-12">
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-12">
              Xin chào! Hãy giúp tôi hiểu hơn về bạn nhé
            </h1>
            <button onClick={handleNext} className="w-14 h-14 bg-black text-white rounded-md flex items-center justify-center mx-auto hover:bg-gray-800 transition-colors">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl font-medium text-gray-900 mb-12">Bạn muốn được gọi là gì nhỉ?</h2>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="{tên bạn}"
              className="w-full max-w-md bg-transparent border-b-2 border-blue-400 text-center text-2xl pb-2 focus:outline-none focus:border-blue-600 mb-12"
            />
            <div className="flex justify-center gap-4">
              <button onClick={handlePrev} className="w-14 h-14 bg-white border border-gray-300 text-gray-900 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={handleNext} disabled={!name.trim()} className="w-14 h-14 bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50">
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl font-medium text-gray-900 mb-12">Giới tính của bạn là?</h2>
            <div className="max-w-xs mx-auto text-left space-y-4 mb-12">
              {['Nam', 'Nữ', 'Khác', 'Không muốn tiết lộ'].map(g => (
                <label key={g} className="flex items-center gap-3 text-xl cursor-pointer">
                  <input 
                    type="radio" 
                    name="gender" 
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-5 h-5 text-black focus:ring-black"
                  />
                  {g}
                </label>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <button onClick={handlePrev} className="w-14 h-14 bg-white border border-gray-300 text-gray-900 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={handleNext} disabled={!gender} className="w-14 h-14 bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50">
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl font-medium text-gray-900 mb-12">Ngày tháng năm sinh của bạn là?</h2>
            <input 
              type="date" 
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full max-w-md bg-white border border-gray-300 rounded-md px-4 py-3 text-xl focus:outline-none focus:border-black mb-12"
            />
            <div className="flex justify-center gap-4">
              <button onClick={handlePrev} className="w-14 h-14 bg-white border border-gray-300 text-gray-900 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={handleNext} disabled={!dob} className="w-14 h-14 bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50">
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="fixed inset-0 bg-gradient-to-br from-emerald-200 via-emerald-300 to-green-400 flex flex-col items-center justify-center p-4 animate-in fade-in duration-1000">
            <div className="max-w-2xl text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Chúc bạn vui vẻ!</h1>
              <p className="text-xl text-gray-800 mb-12">
                Kairoly đã sẵn sàng đồng hành cùng bạn trên con đường phát triển bản thân.
              </p>
              <button onClick={handleNext} disabled={loading} className="px-8 py-3 border border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors disabled:opacity-50">
                {loading ? 'Đang lưu...' : 'Tiếp theo'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
