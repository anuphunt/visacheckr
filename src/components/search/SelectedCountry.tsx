import React from 'react';
import { X } from 'lucide-react';

interface SelectedCountryProps {
  country: string;
  onRemove: () => void;
}

export const SelectedCountry: React.FC<SelectedCountryProps> = ({ country, onRemove }) => {
  if (!country) return null;

  return (
    <div className="mt-2 p-2 bg-indigo-50 rounded-lg text-indigo-700 font-medium flex items-center justify-between">
      <span>Selected: {country}</span>
      <button
        onClick={onRemove}
        className="p-1 hover:bg-indigo-100 rounded-full transition-colors"
        aria-label="Remove selection"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};