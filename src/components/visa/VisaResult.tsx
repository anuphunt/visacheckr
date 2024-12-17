import React from 'react';
import { Clock } from 'lucide-react';
import { VisaInfo } from '../../types/visa';

interface VisaResultProps {
  visaInfo: VisaInfo;
}

export const VisaResult: React.FC<VisaResultProps> = ({ visaInfo }) => {
   const isNumericDays = !isNaN(Number(visaInfo.description));

  return (
    <div className="mt-8">
      <div className={`p-6 rounded-lg ${visaInfo.color}`}>
        <div className="flex items-center gap-2 mb-2">
          {isNumericDays && <Clock className="w-5 h-5" />}
          <h2 className="text-xl font-bold">{visaInfo.status}</h2>
        </div>
        <div className="text-sm">
          {isNumericDays ? (
            <p>You can stay for up to <span className="font-semibold">{visaInfo.description} days</span> without requiring a visa</p>
          ) : (
            <p>
              {typeof visaInfo.description === 'string'
                ? visaInfo.description.charAt(0).toUpperCase() + visaInfo.description.slice(1)
                : visaInfo.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};