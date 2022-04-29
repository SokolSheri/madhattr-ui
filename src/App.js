import Hats from "./components/GetHats"
import AddHat from "./components/AddHat";
import Jackets from "./components/GetJackets";
import AddJacket from "./components/AddJacket";
import Hat from "./components/GetSingleHat";
import Jacket from "./components/GetSingleJacket";

const headers = {
  fontFamily: "Georgia, sans-serif",
  fontSize: "2em",
  letterSpacing: "-2px",
  margin:"10px"
}
function App() {
  return (
    <div>
      <h1 style={headers}>
        MadHattr
      </h1>
      <br/>
      <h1 style={headers}>
        Hats
      </h1>
      <AddHat />
      <br />
      <Hats />
      <br />
      <Hat />
      <br />
      <h1 style={headers}>
        Jackets
      </h1>
      <AddJacket />
      <br />
      <Jackets />
      <br />
      <Jacket />
      <br />
    </div>
  );
}

export default App;
