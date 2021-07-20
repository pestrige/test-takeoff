import React from 'react';
import { AppBar, Container, Toolbar, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../../store/selector';
import ButtonLogout from '../buttons/button-logout';
import ButtonContacts from '../buttons/button-contacts';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const isAuth = useSelector(getIsAuth);

  return (
    <AppBar position='fixed'>
      <Container fixed>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            Test App for Takeoff-staff
          </Typography>
          {
            isAuth &&
              <React.Fragment>
                <Box mr={3}>
                  <ButtonLogout />
                </Box>
                <ButtonContacts />
              </React.Fragment>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
