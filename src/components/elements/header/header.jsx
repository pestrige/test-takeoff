import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Container, Toolbar, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../../store/selector';
import ButtonLogout from '../buttons/button-logout';
import ButtonContacts from '../buttons/button-contacts';
import Search from '../search/search';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  toolbar: {
    flexWrap: 'wrap',
    gap: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  buttonsWrapper: {
    display: 'flex',
    gap: theme.spacing(3),
  },
}));

export default function Header({withSearch = false}) {
  const classes = useStyles();
  const isAuth = useSelector(getIsAuth);

  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
            Test App for Takeoff-staff
          </Typography>
          {withSearch && <Search />}
          {
            isAuth &&
              <Box className={classes.buttonsWrapper}>
                <ButtonLogout />
                {!withSearch && <ButtonContacts />}
              </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  withSearch: PropTypes.bool,
};
