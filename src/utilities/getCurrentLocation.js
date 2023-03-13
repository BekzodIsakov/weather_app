export const getCurrentLocation = async () => {
  // exact coords of the user is not necessary.
  // if (navigator.geolocation) {
  //   return navigator.geolocation.getCurrentPosition();
  // } else {
  //   alert(
  //     "Geolocation is not supported by this browser. Please, update your browser"
  //   );
  // }

  // only user's country is need
  try {
    const resp = await fetch(
      `https://api.ipregistry.co/?key=${process.env.REACT_APP_IP_REGISTRY_KEY}`
    );
    return await resp.json();
  } catch (err) {
    console.error(err);
  }
};
