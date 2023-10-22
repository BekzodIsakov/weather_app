function getTimeFromUnix(unix) {
  if (arguments.length == 0) {
    return console.error("getTimeFromUnix expected 1 argument, but recieved 0");
  } else if (typeof unix !== "number") {
    return console.error(
      `getTimeFromUnix expected argument type number, but recieved ${typeof unix}`
    );
  }

  const date = new Date(unix * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes}`;
}

export default getTimeFromUnix;
