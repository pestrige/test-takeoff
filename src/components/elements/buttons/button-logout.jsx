import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { unAuthorize } from '../../../store/action';
import { AppRoute } from '../../../const';

export default function ButtonLogout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    dispatch(unAuthorize());
    history.push(AppRoute.ROOT);
  };

  return (
    <Button
      color='secondary'
      variant='contained'
      onClick={handleClick}
    >
      Log Out
    </Button>
  );
}
