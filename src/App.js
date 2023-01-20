import { SVG } from "./components/svg";

function App() {
  return (
    <div>
      <h1 className='text-custom-dark-blue text-3xl font-bold underline font-chakra'>
        Weather app
      </h1>
      <h2 className='font-russo text-custom-gray-200'>Weather app</h2>
      <SVG iconName={"day-cloudy"} className='fill-amber-300' />
    </div>
  );
}

export default App;
