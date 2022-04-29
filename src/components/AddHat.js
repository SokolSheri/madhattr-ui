import React, { useState } from 'react'
import axios from 'axios'
import { Button, TextField } from '@mui/material';

const divStyle = { borderRadius: "5px", backgroundColor: "#f8f8ff", padding: "20px", display: 'flex', justifyContent: 'center', alignItems: 'center' }
const forms = { display: 'flex', justifyContent: 'center', padding: 10 }
const flex = { display: 'flex', justifyContent: 'center' }

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
            await axios.post("http://pipelineroute-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/hats", { color: hatColor, type: hatType, description: hatDesc })
            alert('Hat added!')
        } catch (e) {
            alert('Error');
        }
    }

    return (
        <div style={flex}>
            <div style={divStyle}>
                <form style={forms} onSubmit={(evt) => handleSubmit(evt)} id='myForm'>
                    <br />

                    <div>
                        <TextField className="outlined-basic" label="Color" variant="outlined" onChange={(e) => handleChangeColor(e)} /><br />
                        <br />
                        <TextField className="outlined-basic" label="Type" variant="outlined" onChange={(e) => handleChangeType(e)} /><br />
                        <br />
                        <TextField className="outlined-basic" label="Description" variant="outlined" onChange={(e) => handleChangeDesc(e)} /><br />
                        <br />
                        <div style={flex}>
                            <Button type='submit' variant="contained">Add Hat</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddHat;