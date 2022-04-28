import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

function Hat() {

    const [ident, setIdent] = useState(0);

    const handleChange = (evt) => {
        setIdent(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const { data } = await axios.get(`http://localhost:8080/hats/${ident}`);
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='number' min="0" onChange={(e) => handleChange(e)} />
                <br/>
                <Button type='submit' variant="contained">Get Single Hat</Button>
            </form>
        </div>
    );
}

export default Hat;
