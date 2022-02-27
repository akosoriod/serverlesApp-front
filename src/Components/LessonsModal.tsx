import React, { useState, FunctionComponent, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Box, ListItemIcon} from '@mui/material';
import { style } from '../Helper/stylesHelper';
import ClassIcon from '@mui/icons-material/Class';

interface modalsProps  {
    modalTitle:string,
    modalBody:Array<any>
}
export const LessonsModal: FunctionComponent<modalsProps> = ({modalTitle, modalBody}) => {
    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalTitle}
            </Typography>
            <List>
                {modalBody.length > 0 ? modalBody.map(item => {
                    return <ListItem disablePadding>
                        <ListItem>
                            <ListItemIcon>
                                <ClassIcon />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>

                    </ListItem>
                })
                    : ('This user has not attended any lessons.')}
            </List>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            </Typography>
        </Box>
    );
}