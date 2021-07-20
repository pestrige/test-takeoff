import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonContacts from '../buttons/button-contacts';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'grid',
    justifyItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Logged() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography paragraph gutterBottom variant='h5' align='center'>
        You are successfully loggen in.
      </Typography>
      <Typography paragraph gutterBottom variant='h5' align='center'>
        Now you can go to Contacts section.
      </Typography>
      <ButtonContacts />
    </Box>
  );
}
