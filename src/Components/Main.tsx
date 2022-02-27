import React, { FunctionComponent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupIcon from '@mui/icons-material/Group';
import ClassIcon from '@mui/icons-material/Class';
import { Box, Container } from '@mui/material';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { Users } from './Users'
import { Lessons } from './Lessons'
import { Friendships } from './Friendships'

type Main = {};


export const Main: FunctionComponent<Main> = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch(newValue){
      case 0: navigate("/");  
      break; 
      case 1: navigate("/lessonss");  
      break;
      case 2: navigate("/friendships");  
      break; 
      default: navigate("/");   
    }
  };
  return (
    <Container maxWidth="sm"  >
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered>
        <Tab icon={<GroupIcon />} label="Users" />
        <Tab icon={<ClassIcon />} label="Lessonss" />
      </Tabs>
      <Routes>
        <Route path='/'  element={<Users />} />
        <Route path='/lessonss' element={<Lessons />} />
      </Routes>
    </Container >
  );

}
