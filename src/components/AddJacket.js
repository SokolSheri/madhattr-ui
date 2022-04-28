import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material';

function AddJacket() {
    const [jacketType, setJacketType] = useState('');
    const [jacketColor, setJacketColor] = useState('');
    const [jacketSize, setJacketSize] = useState('');

    const handleChangeType = (evt) => {
        setJacketType(evt.target.value)
    }

    const handleChangeColor = (evt) => {
        setJacketColor(evt.target.value)
    }

    const handleChangeSize = (evt) => {
        setJacketSize(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`${jacketType} - ${jacketColor} - ${jacketSize}`);
        // await axios.post("http://localhost:8080/jackets", { color: jacketColor, type: jacketType, size: jacketSize })
    }

    return (
        <form onSubmit={(evt) => handleSubmit(evt)}>
            <br />
            <input type='text' id='color' onChange={(e) => handleChangeColor(e)} />
            <br />
            <input type='text' name='jacketType' onChange={(e) => handleChangeType(e)} />
            <br />
            <select id='size' onChange={(e) => handleChangeSize(e)} >
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
            </select>

            <br />
            <Button type='submit' variant="contained">Add Jacket</Button>
        </form>


    );
}

export default AddJacket;