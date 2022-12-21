import React from "react";
import "./about.css";
import FlipCard from "./flipcard";

function About() {
  return (
    <div className="home">
      <div className="overPicText">
        <h3>
          <strong>E</strong>astern <strong>N</strong>evada <strong>A</strong>
          mature <strong>R</strong>adio <strong>S</strong>ociety
        </h3>
      </div>
      <div className="aboutENARS">
        <h4>
          The Eastern Nevada Amateur Radio Society (ENARS) is based in{" "}
          <a
            href="https://www.cityofelynv.gov/"
            rel="noreferrer"
            target="_blank"
          >
            Ely, Nevada White Pine County
          </a>
          ( DM29 ). Our club call is N7ELY.
        </h4>
      </div>
      <div className="flipCards">
        <FlipCard
          title="Net Purpose"
          body="To prepare radio amateurs for communications in the event of an emergency and to provide those with a common interest an opportunity to meet."
        />
        <FlipCard
          title="Emergency Protocol"
          body="If an event (Earthquake, Flood, Fire, Tornado, etc.) occurs in the area serviced by our net, and your home and family are secure, net members should monitor our Net Frequency (7.208 MHz +/- 5 KHz) for a 30 minute period several times during the day for emergency traffic, announcing your availability and willingness to handle traffic into or out of the effected area."
        />
        <FlipCard
          title="Net Schedule"
          body="Saturday mornings at 9:00am Mountain Time on 7.208 MHz. Rollcall begins at the top of the alphabet (A thru Z, 1st letter of your callsign suffix)."
        />
        <FlipCard
          title="Net Protocol"
          body="Our Net takes approximately 40 minutes to complete. We are pleased to take Net member “early checkins” from 8:00am to Net time (8:30am). If you need to be excused from a future Net Rollcall please advise any of the NCSs and they will accept your request. The NCS pauses the Net midway through the rollcall, and at the end of rollcall to checkin, via “relay”, any late member stations, or member stations unable to hear the NCS during the Net Rollcall."
        />
        <FlipCard
          title="Membership"
          body="A new station that checks into the Net three (3) times in a calendar month will be placed on the rollcall the following month. To remain on the membership roster and rollcall a station must check into the Net at least (2) times each month."
        />
      </div>
    </div>
  );
}

export default About;
