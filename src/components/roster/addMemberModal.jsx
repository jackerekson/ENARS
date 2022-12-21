import React, { useState } from "react";
import axios from "axios";
import "./Modal.css";

const AddMemberModal = ({ show, setShow }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [callSign, setCallSign] = useState("");

  const handleCreateAccount = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/addmember", {
      firstName,
      lastName,
      email,
      callSign,
    });
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="modal" onClick={(e) => setShow(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form className="member-form">
              <label htmlFor="firstName" className="inputLeft">
                First Name:
              </label>
              <input
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              <br />
              <label htmlFor="lastName" className="inputLeft">
                Last Name:
              </label>
              <input
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              <br />
              <label htmlFor="email" className="inputLeft">
                Email:
              </label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br />
              <label htmlFor="callSign" className="inputLeft">
                Call Sign:
              </label>
              <input
                id="callSign"
                onChange={(e) => setCallSign(e.target.value)}
              ></input>
              <br />
              {/* <label htmlFor='password' className='inputLeft'>Password:</label><input id='password' type='password' onChange={e=>setPassword(e.target.value)}></input>
                    <br/>
                    <label htmlFor='confirmPassword' className='inputLeft'>Confirm Password:</label><input id='confirmPassword' type='password' onChange={e=>setConfirmPassword(e.target.value)}></input>
                    <br/> */}
              <button onClick={handleCreateAccount}>Add Member</button>
              <button onClick={(e) => setShow(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMemberModal;
