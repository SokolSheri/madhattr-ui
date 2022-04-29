import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

let tableContainerStyle = {
    overflowY: 'scroll',
    height: 0,
}

const thStyle = {
    margin:10,
    border: '1px solid rgba(0, 0, 0, 0.05)'
}

function Hats() {
    const [gotData, setData] = useState([])
    const getAllHats = async () => {
        const { data } = await axios.get("http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/hats");
        setData(data);
        tableContainerStyle = {
            overflowY: 'scroll',
            height: 300,
            border:"1px solid black"
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
                        <th>ID</th><th style={{thStyle}}>Color</th><th style={{thStyle}}>Type</th><th style={{thStyle}}>Description</th>
                    </tr>
                        {gotData.map((el) => {
                            return (
                                <tr key={el.id}>
                                    <td>{el.id}</td>
                                    <td style={{paddingRight:10,border:'1px solid black'}}>{el.color}</td>
                                    <td style={{margin:10}}>{el.type}</td>
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
