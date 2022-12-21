import React from "react";

function GetHamsInfo({ info }) {
  return (
    <>
      {info && (
        <div>
          <div>
            <h1>{info.call}</h1>
            <h3>
              {info.fname} {info.name}
            </h3>
            <div>
              {info.addr1}, {info.addr2} {info.state}
            </div>
            <h3>expires: {info.expires} </h3>
            <br /> <br />
          </div>
        </div>
      )}
    </>
  );
}

export default GetHamsInfo;
