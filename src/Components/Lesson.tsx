import React, { FunctionComponent } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { IUser } from '../Interfaces/IUser';
import { FriendList } from './FriendList';
import { Button } from '@mui/material';


export const Lesson: FunctionComponent<IUser> = (props: IUser) => {

  return (
    <>
      <Divider light />
      <ListItem sx={{
        width: '100%',
        maxWidth: "sm",
        bgcolor: 'background.paper'
      }}
        alignItems="flex-start"
        secondaryAction={
          <Button variant="contained" onClick={()=>{}}> Info </Button>
        }>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.photo} />
        </ListItemAvatar>

        <ListItemText
          primary={props.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                marginRight={1}
              >
                {props.dob}
              </Typography>
              {props.gender}

            </React.Fragment>
          }
        />
      </ListItem >
      <Divider light />
      
    </>

  );

}

