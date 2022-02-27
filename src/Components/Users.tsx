import React, { FunctionComponent, useEffect, useState } from 'react';
import List from '@mui/material/List';
import {fetcher} from '../Helper/fetcher';
import { IUser } from '../Interfaces/IUser';
import { User } from './User';

type UsersProps = {};


export const Users: FunctionComponent<UsersProps> = () => {
  const [users, setUsers] =  useState<IUser[] | []>([]);
  useEffect(() => {
    fetcher("https://ffqtf5l9ka.execute-api.us-east-1.amazonaws.com/development/v1/user/all").then((result) => {
      setUsers(result.res.Items);
    });
  }, [])
  return (
    <List sx={{ width: '100%', maxWidth:"lg", bgcolor: 'background.paper' }}>
            {users.map(user => {
                return <User
                        key={user.SK}
                        PK={user.PK}
                        SK={user.SK}  
                        name={user.name}
                        photo={user.photo}
                        gender={user.gender}
                        dob={user.dob} />
            })}
  </List>
  );

}

