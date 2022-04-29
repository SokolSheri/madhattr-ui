import axios from "axios";
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';



const tableStyle = {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
}

const columnsStyle = { border: "1px solid #dddddd", textAlign: "left", padding: "8px" }


function Hat() {
    const [ident, setIdent] = useState(0);
    const [item, setItem] = useState('');
    const handleChange = (evt) => {
        setIdent(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const res = await axios.get(`http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/hats/${ident}`);
        if (res.data) {
            setItem(res.data);
        } else {
            alert('Hat does not exist');
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/hats/${id}`)
        alert('Hat deleted')
    }

    let row = <tr></tr>
    if (item !== '') {
        let desc = item.description;
        if (!desc) {
            desc = 'None'
        }
        row = <tr><td style={columnsStyle}>{item.color}</td><td style={columnsStyle}>{item.type}</td><td style={columnsStyle}>{desc}</td><td style={columnsStyle}><button onClick={() => handleDelete(item.id)}>Delete</button></td></tr>
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField id="outlined-basic" label="Identifier" variant="outlined" type='number' min="0" onChange={(e) => handleChange(e)} /><br />
                {/* <input type='number' min="0" onChange={(e) => handleChange(e)} /> */}
                <br />
                <Button type='submit' variant="contained">Get Single Hat</Button>
                <table style={tableStyle}>
                    <tbody>
                        <tr><th style={columnsStyle}>Color</th><th style={columnsStyle}>Type</th><th style={columnsStyle}>Description</th><th style={columnsStyle}>Delete</th></tr>
                        {row}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Hat;
