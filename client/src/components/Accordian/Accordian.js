import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import './Accordian.css';
import axios from 'axios';
import useUserAuth from "../../utils/useUserAuth"
import SnackBar from '../SnackBar/SnackBar';

export default function EventAccordions({ events, onClick }) {
  return events.map((event) => (
    <EventAccordion key={event.id} event={event} onClick={onClick} />
  ));
}

function EventAccordion({ event } ) {
  const user = useUserAuth ();
  const saveShow = async (e) => {
    console.log(event.name, event._embedded.venues[0].name);
    await axios
      .post(`/api/user/${user}/show`, {
        title: event.name,
        ticketUrl: event.url,
        venue: event._embedded.venues[0].name,
        info: event.info,
        pleaseNote: event.pleaseNote,
        image: event.images[1].url,
        date: event.dates.start.localDate
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Accordion id="accordion-tiles">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="event-name">{event.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <img id="event-image" alt="show poster" src={event.images[1].url} />
            <p>
              <span className="field-span">Date: </span>
              {event.dates.start.localDate}
            </p>
            <p>
              <span className="field-span">Event Info: </span>
              {event.info}
            </p>
            <p>
              <span className="field-span">Please Note: </span>
              {event.pleaseNote}
            </p>
            <p>
              <span className="field-span">Venue:</span>{' '}
              {event._embedded.venues[0].name}
            </p>
            <a href={event.url}>Get Tickets</a>
            <br />
            <Button id="save-show-btn" onClick={saveShow}>
              <SnackBar label="Save Show" popupMessage="Show Saved!" />
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
