import Hats from "./components/GetHats"
import AddHat from "./components/AddHat";

function App() {

  return (
    <div>
      <AddHat />
      <Hats />
      {/* <button onClick={() => getAllHats()}>Get Hats</button> */}
    </div>
  );
}

export default App;
