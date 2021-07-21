import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fetchContacts } from '../../../store/action.js';
import { getIsContactsLoaded, getFilteredContacts } from '../../../store/selector.js';
import Header from '../../elements/header/header.jsx';
import Main from '../../elements/main/main.jsx';
import Contacts from '../../elements/contacts/contacts.jsx';

const useStyles = makeStyles((theme) => ({
  contactsList: {
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(18),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(24),
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  const isDataLoaded = useSelector(getIsContactsLoaded);
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <Header withSearch />
      <Main>
        <Container maxWidth='lg'>
          <Grid container spacing={4} justifyContent='center' className={classes.contactsList}>
            {
              isDataLoaded
                ? <Contacts contacts={contacts} />
                : (
                  <Grid item>
                    <CircularProgress color='primary' />
                  </Grid>)
            }
          </Grid>
        </Container>
      </Main>
    </>
  );
}
