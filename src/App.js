import axios from "axios";
import AddHat from "./components/AddHat";

function App() {

  const getAllHats = async () => {
    const { data } = await axios.get("http://localhost:8080/hats");
    console.log(data);

  }


  return (
    <div>
      <AddHat />
      <button onClick={() => getAllHats()}>Get Hats</button>
    </div>
  );
}

export default App;
