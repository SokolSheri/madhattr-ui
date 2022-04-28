import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

let tableContainerStyle = {
    overflowY: 'scroll',
    height: 0
}

// const tableStyle = {
//     position: 'sticky',
//     top: 0,
//     width: 100
// }

function Jackets() {
    const [gotData, setData] = useState([])
    const getAllJackets = async () => {
        const { data } = await axios.get("http://madhattr-application-route-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/jackets");
        setData(data);
        tableContainerStyle = {
            overflowY: 'scroll',
            height: 300
        }
    }


    return (
        <div>
            <Button variant="contained" onClick={() => getAllJackets()}>Get Jackets</Button>
            <div style={tableContainerStyle}>
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

export default Jackets;