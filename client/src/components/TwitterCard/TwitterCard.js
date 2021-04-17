import React from "react";

export default function TwitterCards({ tweets }) {
  console.log("This is the TwitterCards console", tweets);
  return tweets.map((tweet, i) => <TwitterCard key={i} tweet={tweet} />);
}

function TwitterCard({ tweet }) {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              Twitter Handle: {tweet.screen_name}
            </span>
            <span className="card-title">Tweet: {tweet.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
