export const getCurrentDate = (countryCode) => {
  if (!countryCode) return;

  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZone: "UTC",
  };
  return new Date().toLocaleDateString("en-" + countryCode, options);
};
