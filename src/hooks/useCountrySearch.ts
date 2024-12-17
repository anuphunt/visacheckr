import { useState, useMemo } from 'react';
import { getFilteredCountries } from '../utils/countryUtils';

export const useCountrySearch = (allCountries: string[], excludeCountry?: string) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const filteredCountries = useMemo(() => 
    getFilteredCountries(allCountries, searchTerm, excludeCountry),
    [allCountries, searchTerm, excludeCountry]
  );

  const handleSelect = (country: string) => {
    setSelectedCountry(country);
    setSearchTerm('');
  };

  const handleRemove = () => {
    setSelectedCountry('');
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCountry,
    filteredCountries,
    handleSelect,
    handleRemove
  };
};