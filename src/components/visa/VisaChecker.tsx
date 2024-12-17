import React, { useState, useMemo } from 'react';
import { Trophy } from 'lucide-react';
import { visaMatrix } from '../../visa-matrix';
import { CountrySelect } from '../search/CountrySelect';
import { VisaResult } from './VisaResult';
import { VisaInfo } from '../info/VisaInfo';
import { getVisaInfo } from '../../utils/visaUtils';
import { getCountryList } from '../../utils/countryUtils';

interface VisaCheckerProps {
  onShowRanking: () => void;
}

export const VisaChecker: React.FC<VisaCheckerProps> = ({ onShowRanking }) => {
  const countries = useMemo(() => getCountryList(visaMatrix), []);
  const [fromCountry, setFromCountry] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [showResult, setShowResult] = useState(false);

  const getVisaRequirement = () => {
    const fromCountryData = visaMatrix.find(entry => entry.Passport === fromCountry);
    if (!fromCountryData) return null;
    return fromCountryData[toCountry];
  };

  const handleCheck = () => {
    if (fromCountry && toCountry) {
      setShowResult(true);
    }
  };

  const visaInfo = showResult ? getVisaInfo(getVisaRequirement()) : null;

  return (
    <>
      <div className="flex justify-end mb-8">
        <button
          onClick={onShowRanking}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
        >
          <Trophy className="w-5 h-5" />
          <span className="hidden sm:inline">View Passport Ranking</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <CountrySelect
          value={fromCountry}
          onChange={setFromCountry}
          options={countries}
          label="Where are you from?"
          placeholder="Select your passport country"
        />

        <CountrySelect
          value={toCountry}
          onChange={setToCountry}
          options={countries.filter(c => c !== fromCountry)}
          label="Where are you going?"
          placeholder="Select destination country"
        />
      </div>

      <button
        onClick={handleCheck}
        disabled={!fromCountry || !toCountry}
        className="w-full bg-indigo-600 text-white p-3 rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        Check Visa Requirement
      </button>

      {showResult && visaInfo && <VisaResult visaInfo={visaInfo} />}
      <VisaInfo />
    </>
  );
};