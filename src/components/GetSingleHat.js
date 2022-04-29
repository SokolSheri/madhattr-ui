import axios from "axios";
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const tableStyle = {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
    backgroundColor: "#f8f8ff"
}

const columnsStyle = { border: "1px solid #dddddd", textAlign: "left", padding: "8px" }

const inputStyle = { backgroundColor: "#f8f8ff", margin: '10px' }

const headers = {
    fontFamily: "Georgia, sans-serif",
    fontSize: "1.5em",
    margin:"10px"
  }

function Hat() {
    const [ident, setIdent] = useState(0);
    const [item, setItem] = useState('');
    const handleChange = (evt) => {
        setIdent(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const res = await axios.get(`http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/hats/${ident}`);
       
     try{
        if (res.data) {
            setItem(res.data);
        } else {
            alert('Hat does not exist');
        }
     }catch(e){
        alert('Request failure')
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
            <h1 style={headers}>Find a hat with id</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField style={inputStyle} id="outlined-basic" label="Identifier" variant="outlined" type='number' min="0" onChange={(e) => handleChange(e)} /><br />
                <br />
                <Button style={{ margin: '10px' }} type='submit' variant="contained">Get Single Hat</Button>
                <br />
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
