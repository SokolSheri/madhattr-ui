import Hats from "./components/GetHats"
import AddHat from "./components/AddHat";
import Jackets from "./components/GetJackets";
import AddJacket from "./components/AddJacket";


function App() {

  return (
    <div>
      <AddHat />
      <Hats />
      <AddJacket />
      <Jackets />
      {/* <button onClick={() => getAllHats()}>Get Hats</button> */}
    </div>
  );
}

export default App;
