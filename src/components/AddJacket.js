import React, { useState } from 'react'
import axios from 'axios'
import { Button, TextField, Select, MenuItem, InputLabel } from '@mui/material';

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

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        // console.log(`${jacketType} - ${jacketColor} - ${jacketSize}`);
        await axios.post("http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/jackets", { color: jacketColor, type: jacketType, size: jacketSize })
    }

    return (
        <form onSubmit={(evt) => handleSubmit(evt)}>
            <br />
            {/* <input type=n'text' id='color' onChange={(e) => handleChangeColor(e)} /> */}
            <TextField className="outlined-basic" label="Color" variant="outlined" onChange={(e) => handleChangeColor(e)} />
            <br />
            <br />
            {/* <label for='color'>Type</label><br/> */}
            <TextField className="outlined-basic" label="Type" variant="outlined" onChange={(e) => handleChangeType(e)} />
            {/* <input type='text' name='jacketType' onChange={(e) => handleChangeType(e)} /> */}
            <br />
            {/* <label for='size'>Size</label><br/> */}
            <InputLabel id="demo-simple-select-label">Sizes</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => handleChangeSize(e)}
                label='Sizes'
                defaultValue={""}
            >
                <MenuItem value={'XS'}>XS</MenuItem>
                <MenuItem value={'S'}>S</MenuItem>
                <MenuItem value={'XM'}>XM</MenuItem>
                <MenuItem value={'M'}>M</MenuItem>
                <MenuItem value={'L'}>L</MenuItem>
                <MenuItem value={'XL'}>XL</MenuItem>
            </Select>
            {/* <select id='size' onChange={(e) => handleChangeSize(e)} >
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
            </select> */}

            <br /><br />
            <Button type='submit' variant="contained">Add Jacket</Button>
        </form>


    );
}

export default AddJacket;