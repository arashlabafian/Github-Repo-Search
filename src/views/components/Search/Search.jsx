import React, { useState } from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getRepositories } from '../../../store/actions/repositories';
import { useDispatch } from 'react-redux';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100vh',
    background:
      'radial-gradient(circle, rgb(62 64 74) 14%, rgba(47,42,93,1) 100%)',
  },
  img: {
    width: '50%',
  },
  input: {
    width: '85%',
  },
  card: {
    backgroundColor: ' rgba(255, 255, 255, 0.6)',
    borderRadius: '5px',
    width: '25rem',
    height: '10rem',
  },

  button: {
    marginTop: '1rem',
    width: '20rem',
  },

  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  spinner: {
    marginTop: '1.5rem',
  },
}));

const Search = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [redirect, setRedirect] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [search, setSearch] = useState('Facebook/react');

  const handleClick = async () => {
    try {
      setIsSubmitting(true);
      const user = search.split('/')[0];
      const repo = search.split('/')[1];
      const data = { search: { user, repo }, page: 1 };
      await dispatch(getRepositories(data));
      setIsSubmitting(false);
      setRedirect(true);
    } catch (error) {
      toast.error("repository doesn't exist", {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSubmitting(false);
      setSearch('Facebook/react');
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Card className={`${classes.card}`}>
          <CardContent className={classes.content}>
            <TextField
              size='small'
              className={classes.input}
              variant='outlined'
              label='repository'
              name='repository'
              required
              fullWidth
              color='primary'
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
            {isSubmitting ? (
              <CircularProgress className={classes.spinner} color='primary' />
            ) : (
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                aria-label='Register'
                disabled={isSubmitting}
                type='submit'
                onClick={handleClick}
              >
                Search
              </Button>
            )}
          </CardContent>
        </Card>
        {redirect && <Redirect to='/repositories' />}
      </div>
    </div>
  );
};

export default Search;
