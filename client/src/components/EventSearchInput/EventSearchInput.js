import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
      border: "2px solid #0DA67B",
      borderRadius: "15px",
      backgroundColor: "#f5f5f5",
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
      <Button variant="contained" color="secondary" type="submit">
        Search
      </Button>
    </form>
  );
}
