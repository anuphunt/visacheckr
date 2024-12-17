import React from 'react';
import { ChevronDown } from 'lucide-react';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label: string;
  placeholder: string;
}

export const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
  options,
  label,
  placeholder
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
        >
          <option value="">{placeholder}</option>
          {options.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-5 h-5 pointer-events-none" />
      </div>
    </div>
  );
};