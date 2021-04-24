import React from 'react';
import './SavedShowCard.css';
// import image1 from './dnd.jpg';

function SavedShowCard({title, image, date, info, pleaseNote, venue, ticketUrl}) {
  return (
    <div className="card" id="hero-band-card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          id="hero-img"
          title="artist image"
          src={`${image}`}
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}<i className="material-icons right">more_vert</i>
        </span>
        <p>{date}</p>
        <p>{venue}</p>
        <p>
          <a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
           Get Tickets
          </a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Description<i className="material-icons right">close</i>
        </span>
        <p>
          {info}
        </p>
        <p>{pleaseNote}</p>
      </div>
    </div>
  );
}

export default SavedShowCard;
