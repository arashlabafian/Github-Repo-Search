import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    background: 'wheat',
  },
  text: {
    color: '#bf7a7a',
    textAlign: 'center',
  },
}));

const Page404 = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.text} variant='h2' component='h2'>
          404 Page not found
        </Typography>
      </div>
    </>
  );
};

export default Page404;
