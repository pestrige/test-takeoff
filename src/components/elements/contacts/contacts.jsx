import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Fab, CardActions } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Contact from '../contact/contact';

export default function Contacts({contacts}) {
  return (
    <>
      <Grid item>
        <Card justifyContent='center' alignItems='center'>
          <CardActions>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </CardActions>
        </Card>
      </Grid>
      {contacts.map(({id, name, email}) => (
        <Grid key={id} xs={12} sm={6} md={4}>
          <Contact id={id} name={name} email={email}/>
        </Grid>
      ))}
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};
