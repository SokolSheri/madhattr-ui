import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

let tableContainerStyle = {
    overflowY: 'scroll',
    height: 0
}


function Hats() {
    const [gotData, setData] = useState([])

    const getAllHats = async () => {

        const { data } = await axios.get("http://madhattr-application-route-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/hats");
        setData(data);
        tableContainerStyle = {
            overflowY: 'scroll',
            height: 300
        }



    }
    
    return (
        <div >
            <Button variant="contained" onClick={() => getAllHats()}>Get Hats</Button>
            <div style={tableContainerStyle}>
                {/* <table style={tableStyle}> */}
                <table>
                    <tbody>
                    <tr>
                        <th>Color</th><th>Type</th><th>Description</th>
                    </tr>
                        {gotData.map((el) => {
                            return (
                                <tr key={el.id}>
                                    <td>{el.color}</td>
                                    <td>{el.type}</td>
                                    <td>{el.description}</td>
                                </tr>
                            )
                        })}

                        {/* <button onClick={() => getAllHats()}>Get Hats</button> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Hats;
