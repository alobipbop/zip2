import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import GoalForm from './pages/GoalForm';
import History from './pages/History';
import Report from './pages/Report';
import Types from './pages/Types';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, isAuthReady } = useAuth();
  if (!isAuthReady) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (!currentUser) return <Navigate to="/login" />;
  return <>{children}</>;
};

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
            
            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="goals/new" element={<GoalForm />} />
              <Route path="goals/:id/edit" element={<GoalForm />} />
              <Route path="history" element={<History />} />
              <Route path="reports/:id" element={<Report />} />
              <Route path="types" element={<Types />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}
