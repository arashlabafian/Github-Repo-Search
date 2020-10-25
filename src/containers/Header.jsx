import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { clearRepositories } from '../store/actions/repositories';
import { logout } from '../store/actions/user';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = props => {
  const classes = useStyles();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await dispatch(logout());
    props.history.push('/login');
  };
  const handleSearch = async () => {
    await dispatch(clearRepositories());
    props.history.push('/search');
  };
  return (
    <div className={classes.root}>
      <AppBar position='static' color='secondary'>
        <Toolbar className={classes.toolbar}>
          <Avatar
            alt={user.username}
            src={user.avatar}
            className={classes.avatar}
          />

          <div>
            <Button color='inherit' onClick={handleSearch}>
              Search
            </Button>
            <Button color='inherit' onClick={handleLogOut}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
