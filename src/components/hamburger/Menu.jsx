import React from "react";
import Link from "./Link";
import "./Menu.css";

const Menu = ({ setShowHamburger, userId }) => {
  return (
    <div className="modal" onClick={() => setShowHamburger(false)}>
      <nav className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <Link href="/" className="item">
            Home
          </Link>
          <Link href="/officers" className="item">
            ENARS Officers
          </Link>
          <Link href="/roster" className="item">
            Member Roster
          </Link>
          <Link href="/supportedRepeaters" className="item">
            Supported Repeaters
          </Link>
          <Link href="/DMR/APRS/Packet" className="item">
            DMR/APRS/Packet
          </Link>
          <Link href="/callSign" className="item">
            Call Search
          </Link>
          <Link href="/events" className="item">
            Events
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
