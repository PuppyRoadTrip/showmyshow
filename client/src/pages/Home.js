import React from "react";
import TicketMasterCard from '../components/Cards/TMCard'

function Home() {

    return (
        <div>
            <h2>Show My Show</h2>
            <img alt="people dancing at a concert" className="heroImg" src="https://thumbs.dreamstime.com/b/dj-concert-disco-party-woman-silhouette-hands-hair-up-foreground-people-having-fun-65731709.jpg" />
            <TicketMasterCard />
        </div>
    )



}

export default Home;