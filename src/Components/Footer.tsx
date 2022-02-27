import React, { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

type FooterProps = {};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://modaktest.com/">
                ModakApp
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
} 

export const Footer:FunctionComponent<FooterProps> = () => {
    return (
        < Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer" marginTop={2} >
            <Typography variant="h6" align="center" gutterBottom>
                ModakApp
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                akosoriod
            </Typography>
        <Copyright />
        </Box>
    );

}


