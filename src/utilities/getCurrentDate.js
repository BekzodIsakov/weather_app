export const getCurrentDate = (country_code) => {
  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZone: "UTC",
  };
  return new Date().toLocaleDateString("en-" + country_code, options);
};
