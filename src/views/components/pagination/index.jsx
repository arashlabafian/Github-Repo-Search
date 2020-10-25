import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MuiPagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(_ =>
  createStyles({
    root: {
      margin: '1rem auto',
      display: 'flex',
      outline: 0,
      position: 'relative',
      justifyContent: 'center',
    },
  })
);

export const Pagination = props => {
  const classes = useStyles();
  const { totalCommitNum, nowPage, callback } = props;
  const oldestPage = Math.ceil(totalCommitNum / 100);

  const handleChange = (_, value) => {
    callback && callback(value);
  };

  return (
    <div className={classes.root}>
      <MuiPagination
        count={oldestPage}
        page={nowPage}
        onChange={handleChange}
        size='small'
        showFirstButton
        showLastButton
      />
    </div>
  );
};
