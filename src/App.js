import { AppInnerWrapper } from "./components/AppInnerWrapper";
import { Header } from "./components/Header";
import { MaxTemperature } from "./components/MaxTemperature";
import { WeatherTabs } from "./components/Tabs";
import { WeatherDetails } from "./components/WeatherDetails";

function App() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-custom-bg-outer text-custom-off-white font-chakra'>
      <AppInnerWrapper>
        <Header />
        <MaxTemperature />
        <WeatherDetails />
        <WeatherTabs />
      </AppInnerWrapper>
    </div>
  );
}

export default App;
