import React, { useState } from 'react'
import axios from 'axios'
import './Modal.css'

const AddMemberModal = ({ show, setShow }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [callSign, setCallSign] = useState("")

    if(!show){
        return null
    }

    const handleCreateAccout = (e) => {
        e.preventDefault() 
        axios.post('http://localhost:3001/addmember', {firstName, lastName, email, callSign})
        setShow(false)
    }

    return (
        <div className='modal' onClick={e => setShow(false)}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-headers'>
                    <h2>Add New Member</h2>
                </div>
                <form>
                    <label htmlFor='firstName' className='inputLeft'>First Name:</label><input id='firstName' onChange={e=>setFirstName(e.target.value)}></input>
                    <br/>
                    <label htmlFor='lastName' className='inputLeft'>Last Name:</label><input id='lastName' onChange={e=>setLastName(e.target.value)}></input>
                    <br/>
                    <label htmlFor='email' className='inputLeft'>Email:</label><input id='email' onChange={e=>setEmail(e.target.value)}></input>
                    <br/>
                    <label htmlFor='callSign' className='inputLeft'>Call Sign:</label><input id='callSign' onChange={e=>setCallSign(e.target.value)}></input>
                    <br/>
                    {/* <label htmlFor='password' className='inputLeft'>Password:</label><input id='password' type='password' onChange={e=>setPassword(e.target.value)}></input>
                    <br/>
                    <label htmlFor='confirmPassword' className='inputLeft'>Confirm Password:</label><input id='confirmPassword' type='password' onChange={e=>setConfirmPassword(e.target.value)}></input>
                    <br/> */}
                </form>
                <div className='buttons'>
                    <button onClick={handleCreateAccout}>Add Member</button> 
                    <button onClick={e => setShow(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddMemberModal