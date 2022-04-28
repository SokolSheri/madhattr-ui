import axios from "axios";
import { Button } from '@mui/material';

function Hats() {

    const getAllHats = async () => {
      const { data } = await axios.get("http://localhost:8080/hats");
      console.log(data);
    }
  
  
    return (
      <div>
        <Button variant="contained" onClick={() => getAllHats()}>Get Hats</Button>
       {/* <button onClick={() => getAllHats()}>Get Hats</button> */}
      </div>
    );
  }
  
  export default Hats;
  