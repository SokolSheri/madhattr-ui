import React, { useState } from 'react'
import axios from 'axios'
import { Button, TextField, Select, MenuItem, InputLabel } from '@mui/material';

const divStyle = { borderRadius: "5px", backgroundColor: "#f8f8ff", padding: "20px", display: 'flex', justifyContent: 'center', alignItems: 'center' }
const forms = { display: 'flex', justifyContent: 'center', padding: 10 }
const flex = { display: 'flex', justifyContent: 'center' }

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

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await axios.post("http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/jackets", { color: jacketColor, type: jacketType, size: jacketSize })
    }

    return (

        <div style={flex}>
            <div style={divStyle}>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <br />
                    <TextField className="outlined-basic" label="Color" variant="outlined" onChange={(e) => handleChangeColor(e)} />
                    <br />
                    <br />
                    <TextField className="outlined-basic" label="Type" variant="outlined" onChange={(e) => handleChangeType(e)} />
                    <br />
                    <InputLabel id="demo-simple-select-label">Sizes</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handleChangeSize(e)}
                        label='Sizes'
                        style={{width:'100%'}}
                        value={jacketSize}
                    >
                        <MenuItem value={'XS'}>XS</MenuItem>
                        <MenuItem value={'S'}>S</MenuItem>
                        <MenuItem value={'XM'}>XM</MenuItem>
                        <MenuItem value={'M'}>M</MenuItem>
                        <MenuItem value={'L'}>L</MenuItem>
                        <MenuItem value={'XL'}>XL</MenuItem>
                    </Select>
                    <br /><br />
                    <div style={flex}>
                        <Button type='submit' variant="contained">Add Jacket</Button>
                    </div>
                </form>
            </div>
        </div>


    );
}

export default AddJacket;