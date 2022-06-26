import React, { useState } from 'react'
import Route from './home/Route';
import Members from './roster/memberRoster';
import Officers from './officers/officers';
import About from './home/About';
import CallSign from './callSign/api/FindByCallSign/radioCallSign';
import Header from './header/header';
import Events from './evenets/events';
import SupportedRepeaters from './supportedRepeaters/supportedRepeaters';
import DMR from './DMR/dmr';
import Footer from './footer/footer';
import "./App.css"

function App() {
  const [memberRoster, setMemberRoster] = useState(null)
  const [callSign, setCallSign] = useState(null)
  const [userId, setUserId] = useState(0)

  return (
    <div className="content">
      <Route path='/'>
        <div className='homePage'>
          <Header userId={userId} setUserId={setUserId} />
          <About />
          <Footer />
        </div>
      </Route>

      <Route path='/officers'>
        <div className='officersPage'>
          <Header userId={userId} setUserId={setUserId} />
          <Officers />
          <Footer />
        </div>
      </Route>

      <Route path='/roster'>
        <div className='rosterPage'>
          <Header userId={userId} setUserId={setUserId} />
          <Members memberRoster={memberRoster} setMemberRoster={setMemberRoster}/>
          <Footer />
        </div>
      </Route>

      <Route path='/supportedRepeaters'>
        <div className='supportedRepeatersPage'>
          <Header userId={userId} setUserId={setUserId} />
          <SupportedRepeaters />
          <Footer />
        </div>
      </Route>

      <Route path='/DMR/APRS/Packet'>
        <div className='packetPage'>
          <Header userId={userId} setUserId={setUserId} />
          <DMR />
          <Footer />
        </div>
      </Route>

      <Route path='/callSign' >
        <div className="callSignPage">
          <Header userId={userId} setUserId={setUserId} />
          <CallSign callSign={callSign} setCallSign={setCallSign} />
          <Footer />
        </div>
      </Route>
      
      <Route path='/events'>
        <div className='eventsPage'>
          <Header userId={userId} setUserId={setUserId} />
          <Events />
          <Footer />
        </div>
      </Route>
    </div>
  );
}

export default App;
