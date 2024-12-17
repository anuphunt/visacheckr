import { VisaEntry } from '../types/visa';

export const getFilteredCountries = (
  countries: string[],
  searchTerm: string,
  excludeCountry?: string
): string[] => {
  const normalizedSearch = searchTerm.toLowerCase();
  return countries.filter(
    country => 
      country !== excludeCountry && 
      country.toLowerCase().includes(normalizedSearch)
  );
};

export const getCountryList = (visaMatrix: VisaEntry[]): string[] => {
  return visaMatrix.map(entry => entry.Passport);
};