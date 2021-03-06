import React, { useState } from 'react';
import axios from 'axios';
import GetHamsInfo from './getHamsInfo';
import './callSign.css'

const CallSign = () => {
    const [info, setInfo] = useState(null)
    const [callSign, setCallSign] = useState(null)

    const handleChange = (e) => {
        setCallSign(e.target.value)
        console.log(callSign)
        console.log(e.target.value)
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
        <div className='inputContent'>
            <div className='inputCallSign'>
                <input type="text" placeholder='Call Sign' onChange={handleChange} />
                <button onClick={handleClick}>Submit</button>
            </div>
            <div className='operatorInfo'>
                <GetHamsInfo info={info} />
            </div>
        </div>
    )
}

export default CallSign
