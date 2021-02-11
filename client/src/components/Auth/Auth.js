import React, { useState } from 'react';
import { Avatar, Button, Typography, Grid, Paper, Container, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input';
import useStyles from './styles';

const Auth = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const classes = useStyles();

    const handleShowPassword =() => setShowPassword((prevShowPassword) => !prevShowPassword);
    

    const handleSubmit =() => {

    }

    const handleChange =() => {

    }

    const switchMode =() =>{
        setIsSignUp((prevSignUp) => !prevSignUp);
        handleShowPassword(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography varaint="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half />
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                            { isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button className={classes.submit} color="primary" variant="contained" type="submit" fullWidth>
                        { isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justify="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        {isSignUp? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                    </Button>
                                </Grid>
                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}

export default Auth
