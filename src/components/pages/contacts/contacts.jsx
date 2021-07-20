import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Header from '../../elements/header/header.jsx';
import Main from '../../elements/main/main.jsx';
import Contacts from '../../elements/contacts/contacts.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../../store/action.js';
import { getIsContactsLoaded, getContacts } from '../../../store/selector.js';


export default function Login() {
  const isDataLoaded = useSelector(getIsContactsLoaded);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Container maxWidth='lg'>
          <Grid container spacing={4} justifyContent='center'>
            {
              isDataLoaded
                ? <Contacts contacts={contacts} />
                : (
                  <Grid item>
                    <Typography paragraph align='center'>
                      Contacts is loading...
                    </Typography>
                  </Grid>)
            }
          </Grid>
        </Container>
      </Main>
    </>
  );
}
