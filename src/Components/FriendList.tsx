import React, { FunctionComponent, useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { IUser, IUserId } from '../Interfaces/IUser';
import { fetcher } from '../Helper/fetcher';


export const FriendList: FunctionComponent<IUserId> = (props: IUserId) => {
  const [users, setUsers] = useState<IUser[] | []>([]);
  useEffect(() => {
    const username = props.SK.split('#')
    fetcher("https://ffqtf5l9ka.execute-api.us-east-1.amazonaws.com/development/v1/friends/" + username[1]).then((result) => {
      setUsers(result.res.Items);
    });
  }, [])
  return (
    <List sx={{ width: '100%',maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map(user => {
        return (
        <ListItem
               key={user.SK}
               >
                <ListItemAvatar>
                  <Avatar>
                  <Avatar alt="Remy Sharp" src={user.photo} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary="Friend" />
              </ListItem>
        )
      })}


    </List>
  );

}

