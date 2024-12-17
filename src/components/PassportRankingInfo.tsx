import React from 'react';
import { Info } from 'lucide-react';

export const PassportRankingInfo = () => {
  return (
    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Ranking Methodology</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              Rankings are calculated based on the total number of accessible countries, 
              with different weights given to different types of access:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="text-green-600 font-medium">Visa Free Access</span>: 
                Includes both unlimited and time-limited visa-free access
              </li>
              <li>
                <span className="text-blue-600 font-medium">Visa on Arrival</span>: 
                Countries where visas can be obtained at the port of entry
              </li>
              <li>
                <span className="text-yellow-600 font-medium">e-Visa Access</span>: 
                Countries where visas can be obtained through online application
              </li>
            </ul>
            <p>
              Total accessible countries is the sum of all three categories. Countries are ranked first by 
              total accessible countries, then by visa-free count as a tiebreaker.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};