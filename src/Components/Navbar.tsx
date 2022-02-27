import React, { FunctionComponent } from 'react';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

type NavbarProps = {};

export const Navbar:FunctionComponent<NavbarProps> = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <ImportContactsIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Modak
        </Typography>
      </Toolbar>
    </AppBar>
  );

}
