import React from 'react'
import './officers.css'

function Officers() {
  return (
    <div>
        <h1 className="title">EASTERN NEVADA AMATURE RAIDO SOCIETY OFFICERS</h1>
      <div className="pres">
        <div>
          <h2>President</h2>
          <h3>David Hendrix</h3>
          <h4>KB7RLN</h4>
        </div>
      </div>
      <div className="vp">
        <div>
          <h2>Vice President</h2>
          <h3>Devin Michael Ulibarri</h3>
          <h4>W7ND</h4>
        </div>
        <div>
          <h2>Treasurer, Secretary, Editor</h2>
          <h3>Archie L (Les) Robison</h3>
          <h4>N7GWT</h4>
        </div>
      </div>
    </div>
  );
}

export default Officers;