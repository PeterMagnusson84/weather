export const ConvertToTime = (timestamp: number, locale: string = 'sv-SE'): string => {
  // Convert Unix timestamp (seconds) to milliseconds and create Date object
  const date = new Date(timestamp * 1000);
  
  // Format the date to a human-readable time using locale
  return date.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
};