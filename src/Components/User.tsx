import React, { useState, FunctionComponent, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { IUser } from '../Interfaces/IUser';
import { FriendList } from './FriendList';
import { Box, Button, Card, CardContent, ListItemButton, ListItemIcon, Modal, Stack } from '@mui/material';
import { fetcher } from '../Helper/fetcher';
import { style } from '../Helper/stylesHelper';
import { LessonsModal } from './LessonsModal';


export const User: FunctionComponent<IUser> = (props: IUser) => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>();
  const [modalBody, setModalBody] = useState<Array<any>>([]);
  const handleOpenLessons = (name: string, SK: string) => {
    const username = props.SK.split('#')
    setModalTitle('Lessons Taken by ' + name);
    fetcher("https://ffqtf5l9ka.execute-api.us-east-1.amazonaws.com/development/v1/lesson/" + username[1]).then((result) => {
      setModalBody(result.res.Items);
    });
    setOpenModal1(true);
  };
  const handleOpenFriends = (name: string, SK: string) => {
    const username = props.SK.split('#')
    setModalTitle('Friends of ' + name);
    fetcher("https://ffqtf5l9ka.execute-api.us-east-1.amazonaws.com/development/v1/friends/" + username[1]).then((result) => {
      setModalBody(result.res.Items);
    });
    setOpenModal2(true);
  };
  const [user, setUser] = useState<IUser >({
    PK:'test',
    SK:'test',
    name:'test',
    photo:'test',
    dob:'test',
    gender:'test'
  });
  const handleOpenInfoUser = (SK: string) => {
    handleClose();  
    const username = props.SK.split('#')
    fetcher("https://ffqtf5l9ka.execute-api.us-east-1.amazonaws.com/development/v1/user/" + username[1]).then((result) => {
      setUser(result.res);
      setOpenModal3(true);
    });
  };
  const handleClose = () => {
    setOpenModal1(false)
    setOpenModal2(false)
    setOpenModal3(false)
    setModalBody([]);

  };

  return (
    <>
      <Divider light />
      <ListItem
        sx={{ width: '100%', maxWidth: "lg", bgcolor: 'background.paper' }}
        alignItems="flex-start"
        secondaryAction={
          <Stack spacing={1}>
            <Button variant="contained" onClick={() => handleOpenLessons(props.name, props.SK)}> User Lessons </Button>
            <Button variant="contained" style={{ backgroundColor: "#002f5e" }} onClick={() => handleOpenFriends(props.name, props.SK)}> User Friends </Button>
          </Stack>
        } >
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
            </React.Fragment>
          }
        />
        <FriendList PK={props.PK}
          SK={props.SK} />
      </ListItem>
      <Divider light />

      <Modal
        open={openModal1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <LessonsModal modalTitle={modalTitle?? ""} modalBody={modalBody} />
      </Modal>
      <Modal
        open={openModal2}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalTitle}
          </Typography>
          <List>
            {modalBody.length > 0 ? modalBody.map(item => {
              return <ListItem disablePadding>
                <ListItemButton onClick={() => handleOpenInfoUser(props.SK)}>
                  <ListItemIcon>
                    <Avatar alt="Remy Sharp" src={item.photo} />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>

              </ListItem>
            })
              : ('This user has no friends yet.')}
          </List>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          </Typography>
        </Box>
      </Modal>
      <Modal
        open={openModal3}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>  
        <Card sx={{ minWidth: 275 }} >
          <CardContent >
            <Avatar alt="Remy Sharp" src={user.photo} sx={{ width: 86, height: 86 }} />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            </Typography>
            <Typography variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {user.gender}
            </Typography>
            <Typography variant="body2">
              Birthday: {user.dob}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
         </Card> 
         </Box>
      </Modal>
    </>

  );

}

