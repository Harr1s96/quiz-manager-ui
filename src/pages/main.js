import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

import backgroundImg from '../assets/background.jpg';

const useStyles = makeStyles((theme) => ({
    mainButton: {
        margin: theme.spacing(2),
        alignItems: 'center',
    },
    mainText: {
        zIndex: 2,
        position: 'relative',
        display: 'inline',
        maxWidth: 500,
        alignItems: 'center'
    },
    background: {
        zIndex: -1,
        position: 'relative',
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    },
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        // zIndex: 1,
        // position: 'absolute',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    } 
}));

function Main(props) {

    const classes = useStyles();

    return (
        <div className={classes.overlay}>
            <div className={classes.background}>
                <Container component="main" maxWidth="xs">
                    <Typography className={classes.mainText} variant="h3" noWrap>
                        Welcome to Quiz Manager
                    </Typography>
                    <div className={classes.mainButton}>
                        <Button variant="outlined" color="secondary">
                            Create Quiz
                        </Button>
                    </div>
                </Container>
            </div>
        </div> 
    );
}

export default Main;