import React from 'react';
import { Globe } from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">Visa Checker</h1>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};