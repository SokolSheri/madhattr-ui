import React, { useState } from 'react'


function AddHat() {
    const [hatType, setHatType] = useState('');

    const handleChangeType = (evt) => {
        setHatType(evt.target.value)
        console.log(hatType);
    }

    return (
        <form>
            <input type='text' id='color' />
            <input type='text' name='hatType' onChange={(e) => handleChangeType(e)} />
            <textarea id='desc' />
            <button type='submit'>Add Hat</button>
        </form>
    );
}

export default AddHat;