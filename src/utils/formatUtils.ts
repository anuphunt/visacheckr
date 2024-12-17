export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat().format(num);
};

export const formatDays = (days: number): string => {
  if (days === 1) return '1 day';
  return `${days} days`;
};

export const formatVisaStatus = (status: string): string => {
  return status
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};