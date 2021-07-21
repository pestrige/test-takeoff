import React, { useRef, useState } from 'react';
import { Modal, Paper, FormControl, Typography, TextField, Button, CircularProgress} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getModalData, getIsSending } from '../../../store/selector';
import { setModal, setSendingFlag, postContact, putContact } from '../../../store/action';
import { ModalType } from '../../../const';

const useStyles = makeStyles((theme) => ({
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndex.modal,
    color: '#fff',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(8),
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  spinner: {
    position: 'absolute',
    top: 'calc(50% - 40px)',
    left: 'calc(50% - 20px)',
  },
}));

export default function ContactModal() {
  const classes = useStyles();
  const {isOpen, type, payload} = useSelector(getModalData);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const nameRef = useRef();
  const isLoading = useSelector(getIsSending);
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);

  const handleClose = () => {
    dispatch(setModal({isOpen: false, type: ModalType.NEW}));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const email = emailRef.current.querySelector('input').value;
    const name = nameRef.current.querySelector('input').value;

    if (!email) {
      setIsEmailError(true);
    }
    if (!name) {
      setIsNameError(true);
    }
    if (email && name) {
      dispatch(setSendingFlag(true));
      switch (type) {
        case ModalType.EDIT:
          dispatch(putContact({name, email, id: payload.id}));
          break;
        case ModalType.NEW:
        default:
          dispatch(postContact({name, email}));
      }
    }
  };

  return (
    <Modal className={classes.overlay} open={isOpen} onClick={handleClose}>
      <Paper elevation={3} onClick={(evt) => evt.stopPropagation()}>
        <form
          className={classes.form}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <FormControl>
            <Typography paragraph gutterBottom variant='h5' align='center'>
              {type === ModalType.NEW ? 'Add Contact' : 'Edit Contact'}
            </Typography>
            <TextField
              autoFocus
              required
              fullWidth
              margin='dense'
              id='name'
              label='Name'
              type='text'
              variant='outlined'
              defaultValue={type === ModalType.EDIT ? payload.name : ''}
              disabled={isLoading}
              ref={nameRef}
              className={classes.field}
              error={isNameError}
              onFocus={() => setIsNameError(false)}
              helperText={isNameError ? 'name is required' : ' '}
            />
            <TextField
              required
              fullWidth
              margin='dense'
              id='email'
              label='Email Address'
              type='email'
              variant='outlined'
              defaultValue={type === ModalType.EDIT ? payload.email : 'test@test.com'}
              disabled={isLoading}
              ref={emailRef}
              className={classes.field}
              error={isEmailError}
              onFocus={() => setIsEmailError(false)}
              helperText={isEmailError ? 'email is required' : ' '}
            />
            <Button
              color='primary'
              variant='contained'
              type='submit'
              disabled={isLoading}
            >
              {type === ModalType.NEW ? 'Add' : 'Edit'}
            </Button>
            {isLoading && <CircularProgress color='primary' className={classes.spinner}/>}
          </FormControl>
        </form>
      </Paper>
    </Modal>
  );
}
