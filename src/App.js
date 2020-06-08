import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
  allButtons: {
    fontStyle: "oblique",
  }
});

function App() {
  const classes = useStyles();
  return (
    <Button className={classes.allButtons} variant="contained" color="primary">
      Hello World
    </Button>
  );
}

export default App;
