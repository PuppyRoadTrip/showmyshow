import React from 'react';
import './TwitterCard.css';

export default function TwitterCards({ tweets }) {
  return tweets.map((tweet, i) => <TwitterCard key={i} tweet={tweet} />);
}

function TwitterCard({ tweet }) {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card" id="twitter-card-color">
          <div className="card-content">
            <span className="card-title" id="twitter-card-title">
              @{tweet.screen_name}
            </span>
            <span className="card-title" id="twitter-card-text">
              {tweet.text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
