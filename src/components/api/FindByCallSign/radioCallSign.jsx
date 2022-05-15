import React, { useState } from 'react';
import axios from 'axios';
import GetHamsInfo from './getHamsInfo';

const CallSign = () => {
    const [info, setInfo] = useState(null)
    const [callSign, setCallSign] = useState(null)

    const handleChange = (e) => {
        setCallSign(e.target.value)
    }

    const handleClick = async () => {
        try{
            const res = await axios.get(`http://api.hamdb.org/${callSign}/json/ENARS`)
                setInfo(res.data.hamdb.callsign)
            } catch (err) {
                console.log(err)
            }
    }


    return (
        <div className='buttons gas'>
            <div className='gasButtons'>
                <input type="text" placeholder='Call Sign' onChange={handleChange} />
                <button onClick={handleClick} onChange={handleClick}>Submit</button>
            </div>
            <div className='gasList'>
                <GetHamsInfo info={info} />
            </div>
        </div>
    )
}

export default CallSign
