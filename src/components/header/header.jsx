import React, { useState } from 'react'
import Menu from '../hamburger/Menu'
import './header.css'

const Header = ({ setUserId, userId }) => {
    const [showHamburger, setShowHamburger] = useState(false)
    
    
    if(!showHamburger){
        return(
        <div className='header'>
            <img src="./newbackground.jpg" alt="background"/>
            <div onClick={e=>setShowHamburger(true)} className='burgerContainer'>
                <div className='burger'></div>
                <div className='burger'></div>
                <div className='burger'></div>
            </div>
        </div> 
        )
    }
    return (
        <div className='header'>
            <Menu userId={userId} showHamburger={showHamburger} setShowHamburger={setShowHamburger} setUserId={setUserId} />
        </div>
    )

    // if(!userId){
    //     return(
    //         <div className='header'>
    //         <Menu />
    //         <Link href='/' className='item'>
    //             Home
    //         </Link>
    //         <Link href='/officers' className='item'>
    //             ENARS Officers
    //         </Link>
    //         <Link href='/roster' className='item'>
    //             Member Roster
    //         </Link>
    //         <Link href= '/supportedRepeaters' className='item'>
    //           Supported Repeaters
    //         </Link>
    //         <Link href='/DMR/APRS/Packet' className='item'>
    //           DMR/APRS/Packet
    //         </Link>
    //         <Link href='/callSign' className='item'>
    //             Find by Call Sign
    //         </Link>
    //         <Link href='/events' className='item'>
    //             Events
    //         </Link>
    //     </div>
    //     )
    // }
    // return (
    //     <div className='header'>
    //         <Link href='/' className='item'>
    //             Home
    //         </Link>
    //         <Link href='/trips' className='item'>
    //             Trips
    //         </Link>
    //         <Link href='/gasStation' className='item'>
    //             Gas
    //         </Link>
    //         <a href='/' onClick={e=>setUserId(null)}>Logout</a>
    //     </div>
    // )
}

export default Header
