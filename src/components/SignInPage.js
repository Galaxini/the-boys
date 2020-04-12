import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './styles/SignInPage.css';

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
                                    Sign in
                                </div>
                                <div className="form-sign-page" noValidate>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{margin: "24px 0 16px"}}
                                    >
                                        Sign In
                                    </Button>
                                    <div className="forgot-dont-sign-page">
                                        <div className="forgot-sign-page">
                                            <Link href="/forgot" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <div className="dont-sign-page">
                                            <Link href="/signup" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </div>
                                    </div>
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