import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import './Accordian.css';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{event.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Venue: {event._embedded.venues[0].name}
            <br/>
            <a href={event.url}>Get Tickets</a>
            <br/>
            {/* Date: {event.dates.initialStartDate.localDate} */}
            <br/>
            Info: {event.info}
            <br/>
            Please Note: {event.pleaseNote}

            
            <img src={event.images[1].url}/>
              <Button id='save-show-btn' onClick={saveShow}>Save Show</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
