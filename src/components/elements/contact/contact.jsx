import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, Avatar, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { deleteContact, setModal } from '../../../store/action';
import { ModalType } from '../../../const';

const useStyles = makeStyles((theme) => ({
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));
export default function Contact({contact}) {
  const dispatch = useDispatch();
  const {id, name, email} = contact;
  const classes = useStyles();
  const handleEditClick = () => {
    dispatch(setModal({
      isOpen: true,
      type: ModalType.EDIT,
      payload: {name, email, id},
    }));
  };
  const handleDeleteClick = () => dispatch(deleteContact(id));

  return (
    <Card>
      <CardMedia className={classes.avatarWrapper}>
        <Avatar alt={name} src={`https://i.pravatar.cc/256?u=${id}`} className={classes.avatar} />
      </CardMedia>
      <CardContent>
        <Typography variant='h5' gutterBottom>
          {`${name}'s`} contact
        </Typography>
        <Typography>
          <strong>Name:</strong> {name}
        </Typography>
        <Typography>
          <strong>Email:</strong> {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          color='primary'
          onClick={handleEditClick}
        >
          Edit
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
