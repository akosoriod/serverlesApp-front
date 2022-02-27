import React, {useState, FunctionComponent } from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import { ILesson } from '../Interfaces/ILesson';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Box, Button, ListItemButton, ListItemIcon, Modal, Stack } from '@mui/material';
import {style} from '../Helper/stylesHelper';

export const Lesson: FunctionComponent<ILesson> = (props: ILesson) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Button variant="contained" onClick={handleOpen}> Info </Button>
        }>
        <ListItemAvatar>
          <MenuBookIcon />
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
                Professor:
              </Typography>
              {props.professor}

            </React.Fragment>
          }
        />
      </ListItem >
      <Divider light />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {props.name}
          </Typography>
          <Typography id="modal-modal-title" color="text.primary" sx={{ mt: 2 }}>
          Schedule: {props.schedule}
          </Typography>
          <Typography id="modal-modal-title" color="text.primary" sx={{ mt: 2 }}>
          Professor: {props.professor}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.detail}
          </Typography>
        </Box>
      </Modal>
    </>

  );

}

