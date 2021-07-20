import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { login, setSendingFlag } from '../../../store/action';
import { getIsSending } from '../../../store/selector';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(8),
  },
  field: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Form() {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsSending);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleSubmit = (evt) => {
    const email = emailRef.current.querySelector('input').value;
    const password = passwordRef.current.querySelector('input')?.value;
    evt.preventDefault();
    if (!password) {
      setIsPasswordError(true);
    }
    if (email && password) {
      dispatch(setSendingFlag(true));
      dispatch(login({email, password}));
    }
  };
  const handlePasswordFocus = () => setIsPasswordError(false);

  return (
    <form
      className={classes.form}
      noValidate autoComplete='off'
      onSubmit={handleSubmit}
    >
      <FormControl>
        <Typography paragraph gutterBottom variant='h5' align='center'>
          Please login
        </Typography>
        <TextField
          required
          fullWidth
          margin='dense'
          id='email'
          label='Email Address'
          type='email'
          defaultValue='test@test.com'
          variant='outlined'
          disabled={isLoading}
          ref={emailRef}
          className={classes.field}
        />
        <TextField
          autoFocus
          required
          fullWidth
          margin='dense'
          id='password'
          label='Password'
          type='password'
          variant='outlined'
          disabled={isLoading}
          ref={passwordRef}
          className={classes.field}
          error={isPasswordError}
          onFocus={handlePasswordFocus}
          helperText={isPasswordError ? 'password is required' : ' '}
        />
        <Button
          color='primary'
          variant='contained'
          type='submit'
          disabled={isLoading}
        >
          Log in
        </Button>
      </FormControl>
    </form>
  );
}
