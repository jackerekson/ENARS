import React, { useState } from "react";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import GetHamsInfo from "./getHamsInfo";
import "./callSign.css";

const CallSign = () => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [callSign, setCallSign] = useState(null);

  const handleChange = (e) => {
    setCallSign(e.target.value);
    console.log(callSign);
    console.log(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `http://api.hamdb.org/${callSign}/json/ENARS`
      );
      setLoading(false);
      return setInfo(res.data.hamdb.callsign);
    } catch (err) {
      console.log(err);
      return setInfo("Something went wrong, please refresh and try again.");
    }
  };

  return (
    <>
      <form className="callSignForm">
        <input type="text" placeholder="Call Sign" onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
      </form>
      <div className={loading ? "loading" : "operatorInfo"}>
        {loading ? <ClockLoader /> : <GetHamsInfo info={info} />}
      </div>
    </>
  );
};

export default CallSign;
