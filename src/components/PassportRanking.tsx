import React, { useMemo } from 'react';
import { Trophy, ArrowLeft } from 'lucide-react';
import { visaMatrix } from '../visa-matrix';
import { calculatePassportRanking } from '../utils/passportRankingUtils';
import { PassportRankingRow } from './PassportRankingRow';
import { PassportRankingInfo } from './PassportRankingInfo';

interface PassportRankingProps {
  onBack: () => void;
}

export const PassportRanking: React.FC<PassportRankingProps> = ({ onBack }) => {
  const rankings = useMemo(() => calculatePassportRanking(visaMatrix), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Visa Checker
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">Global Passport Ranking</h1>
          </div>

          <PassportRankingInfo />

          <div className="divide-y divide-gray-200">
            {rankings.map((ranking, index) => (
              <PassportRankingRow
                key={ranking.country}
                ranking={ranking}
                position={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};