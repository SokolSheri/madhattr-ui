import axios from "axios";
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import React, { useState } from 'react';

// const styledTable = {
//     borderCollapse: "collapse",
//     margin: "25px 0",
//     fontSize: "0.9em",
//     fontFamily: "sans-serif",
//     minWidth: "400px",
//     boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)"
//   }

// .styled-table {
//     border-collapse: collapse;
//     margin: 25px 0;
//     font-size: 0.9em;
//     font-family: sans-serif;
//     min-width: 400px;
//     box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
// }

const table = {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%"
  }

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
            //console.log(res)
            if (res.data) {
                setItem(res.data);
            } else {
                alert('Jacket does not exist');
            }
        } catch (e) {
            alert('Request failure')
        }

    }

    let row = <tr></tr>
    if (item != '') {
        row = <tr><td>{item.id}</td><td>{item.color}</td><td>{item.type}</td><td>{item.size}</td></tr>
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField className="outlined-basic" label="Identifier" variant="outlined" type='number' min="0" onChange={(e) => handleChange(e)} /><br />
                {/* <input type='number' min="0" onChange={(e) => handleChange(e)} /> */}
                <br />
                <Button type='submit' variant="contained">Get Single Jacket</Button>
                <table style={{table}}>
                    <tbody>
                        <tr><th>ID</th><th>Color</th><th>Type</th><th>Size</th></tr>
                        {row}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Jacket;
