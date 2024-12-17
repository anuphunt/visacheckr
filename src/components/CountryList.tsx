import React from 'react';

interface CountryListProps {
  countries: string[];
  onSelect: (country: string) => void;
}

export const CountryList: React.FC<CountryListProps> = ({ countries, onSelect }) => {
  if (countries.length === 0) return null;

  return (
    <div className="mt-2 max-h-48 overflow-y-auto border border-gray-200 rounded-lg">
      {countries.map((country) => (
        <button
          key={country}
          onClick={() => onSelect(country)}
          className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100"
        >
          {country}
        </button>
      ))}
    </div>
  );
};