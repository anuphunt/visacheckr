import React from 'react';
import { formatNumber } from '../../utils/formatUtils';

interface RankingData {
  Passport: string;
  VisaFree: number;
  VisaOnArrival: number;
  TotalScore: number;
}

interface PassportRankingRowProps {
  ranking: RankingData;
  position: number;
}

export const PassportRankingRow: React.FC<PassportRankingRowProps> = ({ ranking, position }) => {
  return (
    <div className="flex items-center p-4 hover:bg-gray-50">
      <div className="w-12 text-center font-bold text-gray-500">#{position}</div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{ranking.Passport}</h3>
        <p className="text-sm text-gray-500">
          {formatNumber(ranking.TotalScore)} destinations accessible
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-sm font-medium text-green-600">
            {formatNumber(ranking.VisaFree)}
          </div>
          <div className="text-xs text-gray-500">Visa Free</div>
        </div>
        <div>
          <div className="text-sm font-medium text-blue-600">
            {formatNumber(ranking.VisaOnArrival)}
          </div>
          <div className="text-xs text-gray-500">On Arrival</div>
        </div>
      </div>
    </div>
  );
};