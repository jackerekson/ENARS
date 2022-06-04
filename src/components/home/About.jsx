import React from 'react'
import './about.css'

function About() {
  return (
    <div className="home">
      <div className='overPicText'>
        <h3>
          Eastern Nevada Amature Radio Society, 
        </h3> 
        <h4>
          serving the community since 1969.
        </h4>
      </div>
      <div>
        <h4>
          The Eastern Nevada Amateur Radio Society (ENARS) is based in <a href="https://www.cityofelynv.gov/" rel="noreferrer" target="_blank">Ely, 
          Nevada White Pine County</a> ( DM29 ). Our club call is N7ELY.
        </h4>
      </div>
      <div>
        <h1>Net Purpose</h1>
        <h4>To prepare radio amateurs for communications in the event of an emergency and to provide those with a common interest an opportunity to meet.</h4>
      </div>
    </div>
  );
}

export default About;
