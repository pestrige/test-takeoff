import React from 'react';
import { Grid, Card, CardMedia, Avatar, Fab, CardActions } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../store/action';
import { ModalType } from '../../../const';

const useStyles = makeStyles((theme) => ({
  newCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  newCardButtonWrapper: {
    minHeight: '165px',
    justifyContent: 'center',
    flexGrow: 1,
  },
  newAvatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  newAvatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

export default function NewContact() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.newCard}>
        <CardMedia className={classes.newAvatarWrapper}>
          <Avatar alt='New contact avatar' className={classes.newAvatar}>
            <AccountCircleIcon  style={{ fontSize: 154 }} />
          </Avatar>
        </CardMedia>
        <CardActions className={classes.newCardButtonWrapper}>
          <Fab color="primary" aria-label="add" onClick={() => dispatch(setModal({isOpen: true, type: ModalType.NEW}))}>
            <AddIcon />
          </Fab>
        </CardActions>
      </Card>
    </Grid>
  );
}
