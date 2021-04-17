import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function EventAccordions({ events, onClick }) {
  return events.map(event => <EventAccordion key={event.id} event={event} onClick={onClick}/>)
} 

function EventAccordion({ event, onClick }) {

  console.log("event is: ", event)
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography 
          className={classes.heading}
          >
          {event.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><a 
          href={event.url}>
          Ticket Master Link:{event.url}
          </a>
          <br></br>
          Venue:{event._embedded.venues[0].name}
          {/* images */}
          {/* show descrition */}
          {/* <img href={event._embedded.image[0]} /> */}
          <br></br>
          <a href="/saved"><Button onClick={onClick}>Save Show</Button></a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
