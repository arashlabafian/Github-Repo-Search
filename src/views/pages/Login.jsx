import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import Logo from '../../assets/images/GitHub_Logo.png';
import { login } from '../../store/actions/user';

const useStyles = makeStyles(theme => ({
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
    height: '15rem',
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

const Login = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const user = { username, password };
      await dispatch(login(user));
      setIsSubmitting(false);
      props.history.push('/search');
    } catch (error) {
      toast.error('username or password is incorrect', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSubmitting(false);
      setShowPass(false);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Card className={`${classes.card}`}>
          <CardContent className={classes.content}>
            <img className={classes.img} src={Logo} alt='Github' />
            {showPass ? (
              <TextField
                size='small'
                className={classes.input}
                variant='outlined'
                label='password'
                name='password'
                required
                fullWidth
                color='primary'
                value={password}
                type='password'
                onChange={event => setpassword(event.target.value)}
              />
            ) : (
              <TextField
                size='small'
                className={classes.input}
                variant='outlined'
                label='username'
                name='userName'
                required
                fullWidth
                color='primary'
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
            )}
            {isSubmitting ? (
              <CircularProgress className={classes.spinner} color='primary' />
            ) : showPass ? (
              <Button
                variant='contained'
                color='primary'
                className={'mx-auto mt-5 ' + classes.button}
                aria-label='Register'
                disabled={isSubmitting}
                type='submit'
                onClick={handleSubmit}
              >
                Login
              </Button>
            ) : (
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                aria-label='Register'
                disabled={isSubmitting}
                type='submit'
                onClick={() => setShowPass(true)}
              >
                Next
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default withRouter(Login);
