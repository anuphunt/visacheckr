import { VisaEntry } from '../types/visa';
import { PassportRanking } from '../types/ranking';

// Check for visa-free access: numeric or 'visa free'
const isVisaFree = (value: string | number): boolean => {
  if (typeof value === 'number') return true; // Numeric days count as visa-free
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    return normalized === 'visa free';
  }
  return false;
};

// Check for visa-on-arrival access
const isVisaOnArrival = (value: string | number): boolean => {
  return typeof value === 'string' && value.trim().toLowerCase() === 'visa on arrival';
};

// Calculate passport ranking based on visa-free and visa-on-arrival counts
export const calculatePassportRanking = (visaMatrix: VisaEntry[]): PassportRanking[] => {
  const rankings: PassportRanking[] = visaMatrix.map((row) => {
    let visaFree = 0;
    let visaOnArrival = 0;

    // Iterate over all visa statuses except the Passport key
    Object.entries(row).forEach(([key, value]) => {
      if (key !== "Passport" && value !== '-1') { // Exclude home country ('-1')
        if (typeof value === 'string' && value.toLowerCase() === 'no admission') {
          return; // Skip invalid 'no admission' entries
        }
        if (isVisaFree(value)) {
          visaFree += 1;
        } else if (isVisaOnArrival(value)) {
          visaOnArrival += 1;
        }
      }
    });

    return {
      Passport: row.Passport,
      VisaFree: visaFree,
      VisaOnArrival: visaOnArrival,
      TotalScore: visaFree + visaOnArrival,
    };
  });

  // Sort by TotalScore in descending order, then by VisaFree count for tiebreakers
  return rankings.sort((a, b) => {
    if (b.TotalScore !== a.TotalScore) {
      return b.TotalScore - a.TotalScore;
    }
    return b.VisaFree - a.VisaFree;
  });
};
