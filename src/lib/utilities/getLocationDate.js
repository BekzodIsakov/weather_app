export const getLocationDate = (timeZone) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone,
  };

  return new Date().toLocaleDateString("en-US", options);
};
