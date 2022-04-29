import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

let tableContainerStyle = {
    overflowY: 'scroll',
    height: 0  
}

const tableStyle = {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
    backgroundColor: "#f8f8ff"
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
            <Button style={{margin:'10px'}} variant="contained" onClick={() => getAllJackets()}>Get Jackets</Button>
            <div style={tableContainerStyle}>
                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <th style={columnsStyle}>ID</th><th style={columnsStyle}>Color</th><th style={columnsStyle}>Type</th><th style={columnsStyle}>Size</th>
                        </tr>
                        {gotData.map((el) => {
                            return (
                                <tr key={el.id}>
                                    <td style={columnsStyle}>{el.id}</td>
                                    <td style={columnsStyle}>{el.color}</td>
                                    <td style={columnsStyle}>{el.type}</td>
                                    <td style={columnsStyle}>{el.size}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Jackets;