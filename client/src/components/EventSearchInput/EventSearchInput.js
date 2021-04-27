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
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="City, ST (Ex: Bend, OR)"
        variant="outlined"
      />
      <br></br>
      <Button
        id="home-search-btn"
        variant="contained"
        color="secondary"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}
