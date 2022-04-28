import axios from "axios";
import { Button } from '@mui/material';
import React, { useState } from 'react';

function Hat() {

    const [ident, setIdent] = useState(0);
    const [item, setItem] = useState('');
    // let hat = (<table>
    //     <tbody>
    //         <tr><th>Color</th><th>Type</th><th>Description</th></tr>
    //     </tbody>
    // </table>);

    const handleChange = (evt) => {
        setIdent(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const res = await axios.get(`http://madhattr-application-route-madhattr.apps.cluster-k4plx.k4plx.sandbox779.opentlc.com/hats/${ident}`);
        if (res.data) {
            setItem(res.data);
        } else {
            alert('Hat does not exist');
        }
    }


    let row = <tr></tr>
    if(item!=''){
        row = <tr><td>{item.color}</td><td>{item.type}</td><td>{item.description}</td></tr>
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='number' min="0" onChange={(e) => handleChange(e)} />
                <br />
                <Button type='submit' variant="contained">Get Single Hat</Button>
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

export default Hat;
