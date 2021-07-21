import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { getError } from '../../../store/selector';
import { setError } from '../../../store/action';

const useStyles = makeStyles((theme) => ({
  error: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: theme.zIndex.tooltip,
    boxShadow: theme.shadows[3],
  },
}));

export default function Error() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isOpen, message } = useSelector(getError);

  return isOpen && (
    <Alert
      severity='error'
      className={classes.error}
      onClose={() => dispatch(setError({isOpen: false, message: ''}))}
    >
      { message }
    </Alert>
  );
}
