import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

function Jacket() {
    const [ident, setIdent] = useState("");
    const [item, setItem] = useState('');

    const handleChange = (evt) => {
        setIdent(evt.target.value);
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const res = await axios.get(`http://madhattr-application-route-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/jackets/${ident}`);
        if (res.data) {
            setItem(res.data);
        } else {
            alert('Jacket does not exist');
        }
    }

    let row = <tr></tr>
    if (item != '') {
        row = <tr><td>{item.color}</td><td>{item.type}</td><td>{item.description}</td></tr>
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='number' min="0" onChange={(e) => handleChange(e)} />
                <br />
                <Button type='submit' variant="contained">Get Single Jacket</Button>
                <table>
                    <tbody>
                        <tr><th>Color</th><th>Type</th><th>Description</th></tr>
                        {row}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Jacket;
