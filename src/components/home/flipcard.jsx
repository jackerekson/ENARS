import React from 'react'
import './about.css'

function FlipCard({title, body}) {
  return (
    <div className="container">
        <div className="card">
            <div className="card-inner">
            <div className="front-face">
                <h1>{title}</h1>
            </div>
            <div className="back-face">
                <h4>{body}</h4>
            </div>
            </div>
        </div>
    </div>
  );
}

export default FlipCard;