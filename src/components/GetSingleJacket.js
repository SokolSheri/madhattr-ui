import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

function Jacket() {

    const [ident, setIdent] = useState("");

    const handleChange = (evt) => {
        setIdent(evt.target.value);
        console.log(typeof(ident));
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // const { data } = await axios.get(`http://localhost:8080/jackets/${ident}`);
        // console.log(data);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='number' min="0" onChange={(e) => handleChange(e)} />
                <br/>
                <Button type='submit' variant="contained">Get Single Jacket</Button>
            </form>
        </div>
    );
}

export default Jacket;
