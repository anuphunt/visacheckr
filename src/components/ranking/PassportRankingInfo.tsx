import React from 'react';
import { Info } from 'lucide-react';

export const PassportRankingInfo = () => {
  return (
    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Henley Passport Index Methodology</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              The ranking is based on exclusive data from the International Air Transport 
              Association (IATA) and shows the number of destinations passport holders can 
              access without a prior visa.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="text-green-600 font-medium">Visa-Free Access</span>: 
                Includes destinations where passport holders can enter without obtaining 
                a visa before travel (including visa-free and visa-waiver arrangements)
              </li>
              <li>
                <span className="text-blue-600 font-medium">Visa on Arrival</span>: 
                Destinations where visas can be obtained upon arrival
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              Note: Electronic Travel Authorizations (eTAs) and eVisas are considered 
              visa-required and are not counted in the ranking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};