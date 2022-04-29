import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { color } from "@mui/system";

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


function Hats() {
    const [gotData, setData] = useState([])
    const getAllHats = async () => {
        const { data } = await axios.get("http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/hats");
        setData(data);
        tableContainerStyle = {
            overflowY: 'scroll',
            height: 300,
            border: "1px solid black"
        }
    }

    return (
        <div >
            <Button variant="contained" onClick={() => getAllHats()}>Get Hats</Button>
            <div style={tableContainerStyle}>
                {/* <table style={tableStyle}> */}
                <table style={ tableStyle }>
                    <tbody>
                        <tr>
                            <th style={columnsStyle}>ID</th><th style={columnsStyle}>Color</th><th style={columnsStyle}>Type</th><th style={{columnsStyle}}>Description</th>
                        </tr>
                        {gotData.map((el) => {
                            let desc = el.description;
                            if(!desc){
                                desc = 'None'
                            }
                            return (
                                <tr key={el.id}>
                                    <td style={columnsStyle}>{el.id}</td>
                                    <td style={columnsStyle}>{el.color}</td>
                                    <td style={columnsStyle}>{el.type}</td>
                                    <td style={columnsStyle}>{desc}</td>

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
