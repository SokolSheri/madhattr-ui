import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

function Hat() {

    const getSingleHat = async () => {
        const { data } = await axios.get("http://localhost:8080/hats/");
        console.log(data);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Button variant="contained" onClick={() => getSingleHat()}>Get Hat</Button>
            </form>
            {/* <button onClick={() => getAllHats()}>Get Hats</button> */}
        </div>
    );
}

export default Hat;
