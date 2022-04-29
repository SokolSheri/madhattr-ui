import Hats from "./components/GetHats"
import AddHat from "./components/AddHat";
import Jackets from "./components/GetJackets";
import AddJacket from "./components/AddJacket";
import Hat from "./components/GetSingleHat";
import Jacket from "./components/GetSingleJacket";

const row ={ display: "flex" }
const column= { flex: "50%", padding: "10px", height: "300px" }
function App() {
  return (
    <div>
      <h1>
        Hats
      </h1>
      <AddHat />
      <br/>
      <Hats />
      <br/>
      <Hat />
      <br/>
      <h1>
        Jackets
      </h1>
      <AddJacket />
      <br/>
      <Jackets />
      <br/>
      <Jacket />
      <br/>
    </div>
  );
}

export default App;
