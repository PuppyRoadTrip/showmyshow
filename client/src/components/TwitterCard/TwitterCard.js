import React from "react";

export default function TwitterCards({ tweets }) {
  console.log("This is the TwitterCards console" + tweets);
  return tweets.map((tweet) => <TwitterCard key={tweet.id} tweet={tweet} />);
}

function TwitterCard({ tweet }) {
  console.log("This is the TwitterCard console log" + tweet);
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">
              Twitter Handle: {tweet.user.screen_name}
            </span>
            <span class="card-title">Tweet: {tweet.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
