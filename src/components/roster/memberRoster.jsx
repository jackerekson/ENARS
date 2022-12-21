import React, { useState, useEffect } from "react";
import AddMemberModal from "./addMemberModal";
import "./roster.css";

const Members = ({ memberRoster }) => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
  	<>
      <AddMemberModal show={show} setShow={setShow} />
    <div className="App">
      <div className="memberButton">
        <button type="submit" onClick={handleClick}>
          Add Member
        </button>
      </div>
      <div className="memberList">
        <ul>Laine Hendrix</ul>
      </div>
    </div>
    </>
  );
};

export default Members;
