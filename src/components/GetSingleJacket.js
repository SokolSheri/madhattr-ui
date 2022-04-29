import axios from "axios";
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useState } from 'react';

const tableStyle = {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
    backgroundColor: "#f8f8ff"
}

const headers = {
    fontFamily: "Georgia, sans-serif",
    fontSize: "1.5em",
    margin:"10px"
  }

const columnsStyle = { border: "1px solid #dddddd", textAlign: "left", padding: "8px" }

const inputStyle = { backgroundColor: "#f8f8ff", margin: '10px' }

function Jacket() {
    const [ident, setIdent] = useState("");
    const [item, setItem] = useState('');

    const handleChange = (evt) => {
        setIdent(evt.target.value);
    }
    const handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            const res = await axios.get(`http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/jackets/${ident}`);
            if (res.data) {
                setItem(res.data);
            } else {
                alert('Jacket does not exist');
            }
        } catch (e) {
            alert('Request failure')
        }

    }

    const handleDelete = async (id) => {
        await axios.delete(`http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/jackets/${id}`)
        alert('Jacket deleted');
    }

    let row = <tr></tr>
    if (item !== '') {
        row = <tr><td style={columnsStyle}>{item.id}</td><td style={columnsStyle}>{item.color}</td><td style={columnsStyle}> {item.type}</td><td style={columnsStyle}>{item.size}</td><td style={columnsStyle}><button onClick={() => handleDelete(item.id)}>Delete</button></td></tr>
    }

    return (
        <div>
            <h1 style={headers}>Find a jacket with id</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField style={inputStyle} className="outlined-basic" label="Identifier" variant="outlined" type='number' min="0" onChange={(e) => handleChange(e)} /><br />
                <br />
                <Button style={{ margin: '10px' }} type='submit' variant="contained">Get Single Jacket</Button>
                <br />
                <br/>
                <table style={tableStyle}>
                    <tbody>
                        <tr><th style={columnsStyle}>ID</th><th style={columnsStyle}>Color</th><th style={columnsStyle}>Type</th><th style={columnsStyle}>Size</th><th style={columnsStyle}>Delete</th></tr>
                        {row}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Jacket;
