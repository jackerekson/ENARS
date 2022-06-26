import React, {useState, useEffect} from 'react'
import AddMemberModal from './addMemberModal'
import './roster.css'

function Members(memberRoster) {
  const [show, setShow] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setShow(true)
}

  return (
    <div className="App">
      <div className="memberButton">
        <button type='submit' onClick={handleClick}>Add Member</button>
      </div>
      <div className="memberList">
        <ul>Laine Hendrix</ul>
      </div>
      <AddMemberModal show={show} setShow={setShow} />
    </div>
  );
}

export default Members;