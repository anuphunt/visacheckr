import React from 'react';
import { Trophy, ArrowLeft } from 'lucide-react';

interface PassportRankingHeaderProps {
  onBack: () => void;
}

export const PassportRankingHeader: React.FC<PassportRankingHeaderProps> = ({ onBack }) => {
  return (
    <>
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Visa Checker
      </button>

      <div className="flex items-center gap-3 mb-8">
        <Trophy className="w-8 h-8 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-800">Global Passport Ranking</h1>
      </div>
    </>
  );
};