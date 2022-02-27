import React, { FunctionComponent, useEffect, useState } from 'react';
import List from '@mui/material/List';
import {fetcher} from '../Helper/fetcher';
import { IUser } from '../Interfaces/IUser';
import { Lesson } from './Lesson';

type UsersProps = {};


export const Lessons: FunctionComponent<UsersProps> = () => {
  const [users, setUsers] =  useState<IUser[] | []>([]);
  useEffect(() => {
    fetcher("https://ffqtf5l9ka.execute-api.us-east-1.amazonaws.com/development/v1/lesson/all").then((result) => {
      setUsers(result.res.Items);
    });
  }, [])
  return (
    <List sx={{ width: '100%', maxWidth:"sm", bgcolor: 'background.paper', alignItems:'center' }}>
            {users.map(user => {
                return <Lesson
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

