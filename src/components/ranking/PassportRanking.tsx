import React from 'react';
import { passportRankings } from '../../visa-ranking-henley';
import { PassportRankingRow } from './PassportRankingRow';
import { PassportRankingInfo } from './PassportRankingInfo';
import { PassportRankingHeader } from './PassportRankingHeader';

interface PassportRankingProps {
  onBack: () => void;
}

export const PassportRanking: React.FC<PassportRankingProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        <PassportRankingHeader onBack={onBack} />
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <PassportRankingInfo />
          <div className="divide-y divide-gray-200">
            {passportRankings.map((ranking, index) => (
              <PassportRankingRow
                key={ranking.Passport}
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