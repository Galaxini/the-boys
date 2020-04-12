
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const SignPage = inject("mainStore")(
    observer(
        class SignPage extends Component {
            constructor(props) {
                super(props);
                this.state = {
                };
            }

            copyRight() {
                return (
                    <div className="copyright-sign-page-text">
                        {'Copyright © '}
                        <Link color="inherit" href="/">
                            The Boys
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </div>
                );
            }


            renderMain = () => {
                return(
                    <div className="root-sign-page">
                        <div className="image-sign-page"/>
                        <div className="paper-sign-page">    
                            <div className="paper-sign-page-inner">
                                <Avatar className="avatar-sign-page" style={{backgroundColor: "#d61e7e"}}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <div className="signin-sign-page-text">
                                    Sign up
                                </div>
                                <div className="form-sign-page" noValidate>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="fname"
                                                name="firstName"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="lname"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
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
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                label="I want to receive inspiration, marketing promotions and updates via email."
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{margin: "24px 0 16px"}}
                                    >
                                        Sign Up
                                    </Button>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            <Link href="/" variant="body2">
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <div className="copyright-sign-page">
                                        {this.copyRight()}
                                    </div>
                                </div>
                            </div> 
                        </div>       
                    </div>
                )
            }

            render() {
                return this.renderMain()
            }
        }
    )
)


export default withRouter(SignPage)