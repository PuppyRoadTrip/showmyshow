import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './EventSearchInput.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      // onSubmit={handleTMAPISearch}
    >
      <TextField
        id="outlined-basic"
        label="City, ST (Ex: Bend, OR)"
        variant="outlined"
        // onChange={(event) =>
        //   setShowState({
        //     city: event.target.value.split(",")[0],
        //     state: event.target.value.split(", ")[1],
        //   })
        // }
      />
      <br></br>
      <Button id='home-search-btn' variant="contained" color="secondary" type="submit">
        Search
      </Button>
    </form>
  );
}
