export const getVisaTypeColor = (visaType: string): string => {
  const colorMap: Record<string, string> = {
    'visa free': 'bg-green-100 text-green-800',
    'visa on arrival': 'bg-blue-100 text-blue-800',
    'e-visa': 'bg-yellow-100 text-yellow-800',
    'visa required': 'bg-red-100 text-red-800',
    'no admission': 'bg-red-100 text-red-800'
  };

  return colorMap[visaType] || 'bg-gray-100 text-gray-800';
};

export const formatVisaDescription = (description: string | number): string => {
  if (typeof description === 'number') {
    return `You can stay up to ${description} days`;
  }

  return description.charAt(0).toUpperCase() + description.slice(1);
};