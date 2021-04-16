import React from 'react';
import './SavedShowCard.css';
import image1 from '../SaveShowCard/dnd.jpg';

function SavedShowCard() {
    return (
        <div className='card' id='hero-band-card'>
          <div className='card-image waves-effect waves-block waves-light'>
            <img className='activator' id='hero-img' title='The Bridge City Sinners' src={image1} />
          </div>
          <div className='card-content'>
            <span className='card-title activator grey-text text-darken-4'>Days n' Daze<i className='material-icons right'>more_vert</i></span>
            <p><a href='https://daysndaze.net/' target='_blank' rel='noopener noreferrer'>Visit the Band</a></p>
          </div>
          <div className='card-reveal'>
            <span className='card-title grey-text text-darken-4'>About the Band<i className='material-icons right'>close</i></span>
              <p>Days N Daze formed as a duo in 2008. Band founders Whitney Flynn and Jesse (Je-C) Sendejas performed their first set of original music (and a killer cover of Neutral Milk Hotel's "Communist Daughter") for a handful of listeners at a San Marcos, Texas coffee shop that year. They've remained the heart of the group, several band members, dozens of songs, numerous side acts and millions of tour miles later. Longtime members Meagan Melancon (washboard) and Geoff Bell (washtub bass) round out the Houston-based group, which begins a new decade of music with Show Me the Blueprints. Due in May, it is Days N Daze's eighth full-length album and its debut effort for iconic punk label Fat Wreck Chords.</p>
          </div>
        </div>
      );
}

export default SavedShowCard;