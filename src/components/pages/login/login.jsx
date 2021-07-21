import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Paper } from '@material-ui/core';
import { getIsAuth } from '../../../store/selector';
import Header from '../../elements/header/header.jsx';
import Main from '../../elements/main/main.jsx';
import Form from '../../elements/form/form';
import { AppRoute } from '../../../const';


export default function Login() {
  const isAuth = useSelector(getIsAuth);

  return (
    <>
      <Header />
      <Main>
        <Container maxWidth='sm'>
          <Paper elevation={3}>
            {isAuth ? <Redirect to={AppRoute.CONTACTS}/> : <Form />}
          </Paper>
        </Container>
      </Main>
    </>
  );
}
