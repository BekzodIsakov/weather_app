import { useState } from "react";
import { Header, WeatherTabs, CurrentWeather } from "@components";

function App() {
  const [location, setLocation] = useState(null);

  return (
    <div className='flex justify-center items-center min-h-screen bg-custom-bg-outer text-custom-off-white font-chakra'>
      <div className='flex flex-col max-w-md m-4 rounded-3xl grow bg-custom-bg-inner text-zinc-50 px-4 pt-8 pb-5 min-h-[84vh] max-h-[90vh] overflow-hidden'>
        <Header location={location} setLocation={setLocation} />
        <CurrentWeather location={location} />
        {/* <MaxTemperature /> */}
        <WeatherTabs location={location} />
      </div>
    </div>
  );
}

export default App;
