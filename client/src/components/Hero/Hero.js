import React from 'react';
import './Hero.css';
import image1 from '../Hero/BCS.jpg';

function Hero() {
  return (
    <div className="card" id="hero-band-card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          id="hero-img"
          title="The Bridge City Sinners"
          alt="band"
          src={image1}
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          The Bridge City Sinners
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a
            href="https://www.bridgecitysinners.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the Band
          </a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          About the Band<i className="material-icons right">close</i>
        </span>
        <p>
          From the misty, pine-covered hills of the Pacific Northwest hail the
          Bridge City Sinners, who span the continuum from prohibition era jazz
          to Appalachian death folk. This traditional string band line up bends
          the meaning of the word genre, playing festivals from Punk Rock
          Bowling, to Muddy Roots, to Oregon’s Bluegrass String Summit. They
          started their journey by busking on sidewalks across the country and
          now this supergroup of musicians find themselves on the national tour
          circuit. The Sinners still hold true to the DIY mentality of putting
          albums out on a self made record label, Flail Records. With talented
          musicianship and a punk as f***! live show, this is one band you don’t
          want to miss.
        </p>
      </div>
    </div>
  );
}

export default Hero;
