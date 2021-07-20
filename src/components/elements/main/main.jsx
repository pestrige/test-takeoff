import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'grid',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#F5F5F6',
  },
}));

export default function Main({children}) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
