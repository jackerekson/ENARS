import React from 'react'
import './DMR.css'

function DMR() {
  return (
    <div className="App">
        <div>
            <h1>DMR</h1>
            <h3>Squaw Pk 443.400 +5 Mhz CC-1 ID# 3155579 BM</h3>
            <h3>Kimberly Pk 444.750 +5 Mhz CC-1 ID# 312673 BM</h3>
        </div>
        <div>
            <h1>APRS</h1>
            <h2>144.390 Digipeaters:</h2>
            <h3>ELY, RUTH, EURKA, VIC see APRS.FI for more</h3>
        </div>
        <div>
            <h1>Packet:</h1>
            <h3>Node RUTH 145.050</h3>
        </div>
    </div>
  );
}

export default DMR;