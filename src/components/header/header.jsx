import React from 'react'
import Link from './Link'
import './header.css'

const Header = ({ setUserId, userId }) => {

    if(!userId){
        return(
            <div className='header'>
            <Link href='/' className='item'>
                Home
            </Link>
            <Link href='/officers' className='item'>
                ENARS Officers
            </Link>
            <Link href='/roster' className='item'>
                Member Roster
            </Link>
            <Link href= '/supportedRepeaters' className='item'>
              <div class="dropdown">
                <button class="dropbtn">Supported Repeaters</button>
                <div class="dropdown-content">
                  <a href="#caveMt">Cave Mt</a>
                  <a href="#squawPk">Squaw Pk</a>
                  <a href="#kimberlyPk">Kimberly Pk</a>
                  <a href="#victoriaPk">Victoria Pk</a>
                </div>
              </div>
            </Link>
            <Link href='/DMR/APRS/Packet'>
              DMR/APRS/Packet
            </Link>
            <Link href='/callSign' className='item'>
                Find by Call Sign
            </Link>
            <Link href='/events' className='item'>
                Events
            </Link>
        </div>
        )
    }
    return (
        <div className='header'>
            <Link href='/' className='item'>
                Home
            </Link>
            <Link href='/trips' className='item'>
                Trips
            </Link>
            <Link href='/gasStation' className='item'>
                Gas
            </Link>
            <a href='/' onClick={e=>setUserId(null)}>Logout</a>
        </div>
    )
}

export default Header
