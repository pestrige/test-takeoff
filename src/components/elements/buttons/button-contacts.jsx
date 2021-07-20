import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { AppRoute } from '../../../const';

export default function ButtonContacts() {
  const history = useHistory();

  return (
    <Button
      color='inherit'
      variant='outlined'
      onClick={() => history.push(AppRoute.CONTACTS)}
    >
      Contacts
    </Button>
  );
}
