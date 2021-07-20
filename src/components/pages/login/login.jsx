import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Paper } from '@material-ui/core';
import { getIsAuth } from '../../../store/selector';
import Header from '../../elements/header/header.jsx';
import Main from '../../elements/main/main.jsx';
import Logged from '../../elements/logged/logged.jsx';
import Form from '../../elements/form/form';


export default function Login() {
  const isAuth = useSelector(getIsAuth);

  return (
    <>
      <Header />
      <Main>
        <Container maxWidth='sm'>
          <Paper elevation={3}>
            {isAuth ? <Logged /> : <Form />}
          </Paper>
        </Container>
      </Main>
    </>
  );
}
