import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Trash2 } from 'lucide-react';

interface TaskType {
  id: string;
  name: string;
  color?: string;
  weight?: number | null;
}

export default function Types() {
  const [types, setTypes] = useState<TaskType[]>([]);
  const [newTypeName, setNewTypeName] = useState('');
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchTypes();
  }, [currentUser]);

  const fetchTypes = async () => {
    if (!currentUser) return;
    try {
      const response = await fetch(`/api/types?userId=${currentUser.id}`);
      if (response.ok) {
        const data = await response.json();
        setTypes(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getRandomColor = () => {
    const colors = [
      '#ffdac1', '#ffb7b2', '#ff9aa2', '#e2f0cb', '#b5ead7', '#c7ceea', 
      '#f1cbff', '#cbf0ff', '#cbe2ff', '#ffe5cb', '#ffcbe6', '#d4ffcb',
      '#ffd1d1', '#fff5ba', '#baffc9', '#bae1ff', '#e8baff', '#ffbdf0'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleAddType = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTypeName.trim() || !currentUser) return;
    
    try {
      const color = getRandomColor();
      const response = await fetch('/api/types', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: currentUser.id, name: newTypeName.trim(), color, weight: 10 })
      });
      if (response.ok) {
        const newType = await response.json();
        setTypes([newType, ...types]);
        setNewTypeName('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteType = async (id: string) => {
    try {
      const response = await fetch(`/api/types/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setTypes(types.filter(t => t.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Task Types</h1>
        <p className="text-gray-600 mt-2">Manage categories for your tasks.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <form onSubmit={handleAddType} className="flex gap-4 mb-8">
          <input
            type="text"
            value={newTypeName}
            onChange={(e) => setNewTypeName(e.target.value)}
            placeholder="E.g., Health, Work, Learning..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Type
          </button>
        </form>

        <div className="space-y-3">
          {types.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No task types created yet.</p>
          ) : (
            types.map(type => (
              <div key={type.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100" style={{ backgroundColor: type.color || '#f9fafb' }}>
                <span className="font-medium text-gray-900">{type.name}</span>
                <button
                  onClick={() => handleDeleteType(type.id)}
                  className="text-gray-500 hover:text-red-700 p-2 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
