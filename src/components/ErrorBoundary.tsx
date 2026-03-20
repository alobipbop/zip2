import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = 'Một lỗi không mong muốn đã xảy ra.';
      try {
        if (this.state.error?.message.includes('OperationType')) {
           const parsed = JSON.parse(this.state.error.message);
           errorMessage = `Lỗi Cơ sở dữ liệu: ${parsed.error} trên ${parsed.operationType} tại ${parsed.path}`;
        } else {
           errorMessage = this.state.error?.message || errorMessage;
        }
      } catch (e) {
        errorMessage = this.state.error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-700 mb-4 break-words">{errorMessage}</p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Tải lại trang
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
