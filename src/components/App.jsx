import React, { useState } from 'react'
import Route from './home/Route';
import Members from './roster/memberRoster';
import Officers from './officers/officers';
import About from './home/About';
import CallSign from './api/FindByCallSign/radioCallSign';
import Header from './header/header';
import Events from './evenets/events';

function App() {
  const [memberRoster, setMemberRoster] = useState(null)
  const [callSign, setCallSign] = useState(null)
  const [userId, setUserId] = useState(0)

  return (
    <div>
      <Route path='/'>
        <Header userId={userId} setUserId={setUserId} />
        <About />
      </Route>
      <Route path='/officers'>
        <Header userId={userId} setUserId={setUserId} />
        <Officers />
      </Route>
      <Route path='/roster'>
        <Header userId={userId} setUserId={setUserId} />
        <Members memberRoster={memberRoster} setMemberRoster={setMemberRoster}/>
      </Route>
      <Route path='/callSign'>
        <Header userId={userId} setUserId={setUserId} />
        <CallSign callSign={callSign} setCallSign={setCallSign} />
      </Route>
      <Route path='/events'>
        <Header userId={userId} setUserId={setUserId} />
        <Events />
      </Route>
    </div>
  );
}

export default App;
