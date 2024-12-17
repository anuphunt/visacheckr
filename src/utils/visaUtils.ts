import { VisaInfo, VisaRequirement, VisaType } from '../types/visa';
import { getVisaTypeColor } from './visaTypeUtils';
import { formatDays, formatVisaStatus } from './formatUtils';

export const getVisaInfo = (requirement: VisaRequirement | null): VisaInfo | null => {
  if (!requirement) return null;

  if (requirement === '-1') {
    return {
      status: 'No Visa Required',
      description: 'This is your home country',
      color: 'bg-green-100 text-green-800'
    };
  }

  if (typeof requirement === 'number') {
    return {
      status: 'Visa-Free Entry',
      description: formatDays(requirement),
      color: 'bg-green-100 text-green-800'
    };
  }

  const visaType = requirement as VisaType;
  const color = getVisaTypeColor(visaType);
  const status = formatVisaStatus(visaType);

  return {
    status,
    description: requirement,
    color
  };
};