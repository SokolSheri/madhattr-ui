import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

let tableContainerStyle = {
    overflowY: 'scroll',
    height: 0,
   
}

const tableStyle = {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
}

const columnsStyle = { border: "1px solid #dddddd", textAlign: "left", padding: "8px" }

function Jackets() {
    const [gotData, setData] = useState([])
    const getAllJackets = async () => {
        const { data } = await axios.get("http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/jackets");
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
                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <th style={columnsStyle}>ID</th><th style={columnsStyle}>Color</th><th style={columnsStyle}>Type</th><th style={columnsStyle}>Size</th>
                        </tr>
                        {gotData.map((el) => {
                            return (
                                <tr key={el.id}>
                                    <td>{el.id}</td>
                                    <td>{el.color}</td>
                                    <td>{el.type}</td>
                                    <td>{el.size}</td>
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