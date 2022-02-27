import React, { FunctionComponent, useEffect, useState } from 'react';
import List from '@mui/material/List';
import {fetcher} from '../Helper/fetcher';
import { ILesson } from '../Interfaces/ILesson';
import { Lesson } from './Lesson';

type UsersProps = {};


export const Lessons: FunctionComponent<UsersProps> = () => {
  const [lessons, setLessons] =  useState<ILesson[] | []>([]);
  useEffect(() => {
    fetcher("https://ffqtf5l9ka.execute-api.us-east-1.amazonaws.com/development/v1/lesson/all").then((result) => {
      setLessons(result.res.Items);
    });
  }, [])
  return (
    <List sx={{ width: '100%', maxWidth:"sm", bgcolor: 'background.paper', alignItems:'center' }}>
            {lessons.map(lesson => {
                return <Lesson
                        key={lesson.SK}
                        PK={lesson.PK}
                        SK={lesson.SK}  
                        name={lesson.name}
                        professor={lesson.professor}
                        schedule={lesson.schedule}
                        detail={lesson.detail} />
            })}
  </List>
  );

}

