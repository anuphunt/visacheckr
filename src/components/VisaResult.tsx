import React from 'react';
import { VisaInfo } from '../types/visa';

interface VisaResultProps {
  visaInfo: VisaInfo;
}

export const VisaResult: React.FC<VisaResultProps> = ({ visaInfo }) => {
  return (
    <div className="mt-8">
      <div className={`p-6 rounded-lg ${visaInfo.color}`}>
        <h2 className="text-xl font-bold mb-2">{visaInfo.status}</h2>
        <p className="text-sm opacity-90">
          {typeof visaInfo.description === 'string'
            ? visaInfo.description.charAt(0).toUpperCase() + visaInfo.description.slice(1)
            : visaInfo.description}
        </p>
      </div>
    </div>
  );
};