import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from "axios";

import logo from '../assets/logo.jpg';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        margin: theme.spacing(1),
        width: 100,
        height: 100,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login() {

    const classes = useStyles();
    const history = useHistory();

    const initialState = {
        username: "",
        password: "",
        errorMessage: ""
    };

    const [loginState, setLoginState] = useState(initialState);
    const [isLoginError, setIsLoginError] = useState(false);

    const handleClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsLoginError(false);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        axios.post('http://localhost:9090/quizManager/login', 
            {
                username: loginState.username,
                password: loginState.password
            })
            .then((response) => {
                console.log(response);
                setLoginState({...loginState, userToken: response.data.token});
                history.push({
                    pathname: '/app',
                    state: {
                        token: response.data.token
                    }
                });
            })
            .catch((err) => {
                setIsLoginError(true);
                setLoginState({...loginState, errorMessage: err.response.data.message})
                console.log(err);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Snackbar open={isLoginError} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {loginState.errorMessage}
                </Alert>
            </Snackbar>
            <div className={classes.paper}>
                <img src={logo} alt="app logo" className={classes.logo}></img>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                onInput={(event) => setLoginState({...loginState, username: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onInput={(event) => setLoginState({...loginState, password: event.target.value})}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        onClick={handleLogin}
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </Container>
    );

}

export default Login;