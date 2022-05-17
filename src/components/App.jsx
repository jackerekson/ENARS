import React, { useState } from 'react'
import Route from './home/Route';
import Members from './roster/memberRoster';
import Officers from './officers/officers';
import About from './home/About';
import CallSign from './callSign/api/FindByCallSign/radioCallSign';
import Header from './header/header';
import Events from './evenets/events';
import SupportedRepeaters from '../supportedRepeaters/supportedRepeaters';
import DMR from './DMR/dmr';
import Footer from './footer/footer';

function App() {
  const [memberRoster, setMemberRoster] = useState(null)
  const [callSign, setCallSign] = useState(null)
  const [userId, setUserId] = useState(0)

  return (
    <div>
      <Route path='/'>
        <Header userId={userId} setUserId={setUserId} />
        <About />
        <Footer />
      </Route>

      <Route path='/officers'>
        <Header userId={userId} setUserId={setUserId} />
        <Officers />
        <Footer />
      </Route>

      <Route path='/roster'>
        <Header userId={userId} setUserId={setUserId} />
        <Members memberRoster={memberRoster} setMemberRoster={setMemberRoster}/>
        <Footer />
      </Route>

      <Route path='/supportedRepeaters'>
        <Header userId={userId} setUserId={setUserId} />
        <SupportedRepeaters />
        <Footer />
      </Route>

      <Route path='/DMR/APRS/Packet'>
        <Header userId={userId} setUserId={setUserId} />
        <DMR />
        <Footer />
      </Route>

      <Route path='/callSign'>
        <Header userId={userId} setUserId={setUserId} />
        <CallSign callSign={callSign} setCallSign={setCallSign} />
        <Footer />
      </Route>
      
      <Route path='/events'>
        <Header userId={userId} setUserId={setUserId} />
        <Events />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
