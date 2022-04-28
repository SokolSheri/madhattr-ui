import axios from "axios";
import { Button } from '@mui/material';

function Jackets() {

    const getAllJackets = async () => {
      const { data } = await axios.get("http://localhost:8080/jackets");
      //console.log(data);
    }
  
  
    return (
      <div>
        <Button variant="contained" onClick={() => getAllJackets()}>Get Jackets</Button>
       {/* <button onClick={() => getAllHats()}>Get Hats</button> */}
      </div>
    );
  }
  
  export default Jackets;