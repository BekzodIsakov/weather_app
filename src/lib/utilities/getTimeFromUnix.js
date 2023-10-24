function getTimeFromUnix(unix, timeZone) {
  if (arguments.length != 2) {
    return console.error(
      `getTimeFromUnix function expected 2 arguments, but recieved ${arguments.length}`
    );
  } else if (typeof unix !== "number") {
    return console.error(
      `getTimeFromUnix function expected argument type number, but recieved ${typeof unix} type`
    );
  }

  const date = new Date(unix * 1000);

  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // hours = hours < 10 ? "0" + hours : hours;
  // minutes = minutes < 10 ? "0" + minutes : minutes;

  // return `${hours}:${minutes}`;

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  });
}

export default getTimeFromUnix;
