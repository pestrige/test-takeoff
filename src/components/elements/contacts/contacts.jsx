import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Contact from '../contact/contact';
import NewContact from '../new-contact/new-contact';
import ContactModal from '../contact-modal/contact-modal';
import Error from '../error/error';

export default function Contacts({contacts}) {
  return (
    <>
      <NewContact />
      {contacts.map((contact) => (
        <Grid item key={contact.id} xs={12} sm={6} md={4}>
          <Contact contact={contact} />
        </Grid>
      ))}
      <ContactModal />
      <Error />
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};
