import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material';

function AddHat() {
    const [hatType, setHatType] = useState('');
    const [hatColor, setHatColor] = useState('');
    const [hatDesc, setHatDesc] = useState('');

    const handleChangeType = (evt) => {
        setHatType(evt.target.value)
    }

    const handleChangeColor = (evt) => {
        setHatColor(evt.target.value)
    }

    const handleChangeDesc = (evt) => {
        setHatDesc(evt.target.value)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await axios.post("http://madhattr-application-route-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/hats", { color: hatColor, type: hatType, description: hatDesc });
            alert('Hat added!')
        } catch (e) {
            alert('Error');
        }
    }

    return (
        <form onSubmit={(evt) => handleSubmit(evt)}>
            <br />
            <input type='text' id='color' onChange={(e) => handleChangeColor(e)} />
            <br />
            <input type='text' name='hatType' onChange={(e) => handleChangeType(e)} />
            <br />
            <textarea id='desc' onChange={(e) => handleChangeDesc(e)} />
            <br />
            <Button type='submit' variant="contained">Add Hat</Button>
        </form>
    );
}

export default AddHat;