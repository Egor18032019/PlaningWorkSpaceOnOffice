import React from 'react';
import {Container, Grid} from "@material-ui/core";

const Loader = () => {
  return (
    <Grid container justify={`center`}>
      <div className="lds-hourglass"></div>
    </Grid>
  );
};

export default Loader;
