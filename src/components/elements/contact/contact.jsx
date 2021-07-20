import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

export default function Contact({id, name, email}) {
  return (
    <Card>
      <CardMedia
        component='img'
        height='180'
        image={`https://picsum.photos/300/180?random=${id}`}
        title='Contact title'
      />
      <CardContent>
        <Typography variant='h5' gutterBottom>Contact {id}</Typography>
        <Typography>Name: {name}</Typography>
        <Typography>Email {email}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          Edit
        </Button>
        <Button size='small' color='primary'>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

Contact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
