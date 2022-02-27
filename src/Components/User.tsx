import React, {useState, FunctionComponent } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { IUser } from '../Interfaces/IUser';
import { FriendList } from './FriendList';
import { Box, Button, ListItemButton, ListItemIcon, Modal, Stack } from '@mui/material';
import {fetcher} from '../Helper/fetcher';
import ClassIcon from '@mui/icons-material/Class';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const User: FunctionComponent<IUser> = (props: IUser) => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>();
  const [modalBody, setModalBody] = useState<Array<any>>([]);
  const handleOpen = () => setOpen(true);
  const handleOpenLessons = (name:string) => {
    setModalTitle('Lessons Taken by '+ name);
    fetcher("https://ffqtf5l9ka.execute-api.us-east-1.amazonaws.com/development/v1/lesson/"+name).then((result) => {
      setModalBody(result.res.Items);
    });
    handleOpen()
  };
  const handleOpenFriends = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Divider light />
      <ListItem
        sx={{ width: '100%', maxWidth: "lg", bgcolor: 'background.paper' }}
        alignItems="flex-start"
        secondaryAction={
          <Stack spacing={1}>
            <Button variant="contained" onClick={()=>handleOpenLessons(props.name)}> User Lessons </Button>
            <Button variant="contained" style={{ backgroundColor: "#002f5e" }} onClick={() => { }}> User Friends </Button>
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
              {props.gender}
            </React.Fragment>
          }
        />
        <FriendList PK={props.PK}
          SK={props.SK} />
      </ListItem>
      <Divider light />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalTitle}
          </Typography>
          <List>
          {modalBody.map(user => {
          return <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ClassIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          
          </ListItem>
            })}
           </List>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           
          </Typography>
        </Box>
      </Modal>

    </>

  );

}

