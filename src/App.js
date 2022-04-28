import Hats from "./components/GetHats"
import AddHat from "./components/AddHat";
import Jackets from "./components/GetJackets";
import AddJacket from "./components/AddJacket";
import Hat from "./components/GetSingleHat";
import Jacket from "./components/GetSingleJacket";

function App() {
  return (
    <div>
      <h1>
        Hats
      </h1>
      <AddHat />
      <Hats />
      <Hat />
      <h1>
        Jackets
      </h1>
      <AddJacket />
      <Jackets />
      <Jacket />
    </div>
  );
}

export default App;
