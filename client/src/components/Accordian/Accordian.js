import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import './Accordian.css';
import axios from 'axios';

export default function EventAccordions({ events, onClick }) {
  return events.map((event) => (
    <EventAccordion key={event.id} event={event} onClick={onClick} />
  ));
}

function EventAccordion({ event, onClick }) {
  console.log('event is: ', event.id);

  const saveShow = async (e) => {
    console.log(event.name, event._embedded.venues[0].name)
    await axios
      .post('/api/save', {
        title: event.name,
        ticketUrl: event.url,
        venue: event._embedded.venues[0].name,
        pleaseNote: event.pleaseNote,
        image: event.url

        // figure out which event they clicked on
        // save the title, ticketURL, venue, description, date, image to DB
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.replace('/saved');
  };

  return (
    <div>
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
            <img id="event-image" src={event.images[1].url} />
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
            <br/>
              <Button id='save-show-btn' onClick={saveShow}>Save Show</Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
