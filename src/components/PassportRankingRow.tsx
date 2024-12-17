import React from 'react';
import type { PassportRanking } from '../utils/passportRankingUtils';

interface PassportRankingRowProps {
  ranking: PassportRanking;
  position: number;
}

export const PassportRankingRow: React.FC<PassportRankingRowProps> = ({ ranking, position }) => {
  return (
    <div className="flex items-center p-4 hover:bg-gray-50">
      <div className="w-12 text-center font-bold text-gray-500">#{position}</div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{ranking.country}</h3>
        <p className="text-sm text-gray-500">
          {ranking.totalAccessibleCountries} accessible countries
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-sm font-medium text-green-600">{ranking.visaFreeCount}</div>
          <div className="text-xs text-gray-500">Visa Free</div>
        </div>
        <div>
          <div className="text-sm font-medium text-blue-600">{ranking.visaOnArrivalCount}</div>
          <div className="text-xs text-gray-500">On Arrival</div>
        </div>
        <div>
          <div className="text-sm font-medium text-yellow-600">{ranking.eVisaCount}</div>
          <div className="text-xs text-gray-500">e-Visa</div>
        </div>
      </div>
    </div>
  );
};