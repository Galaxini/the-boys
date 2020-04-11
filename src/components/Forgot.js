import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
                        <Link color="inherit" href="https://material-ui.com/">
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
                                <div className="signin-sign-page-text">
                                    Fuck off я не готоff
                                </div>
                                <div className="copyright-sign-page">
                                    {this.copyRight()}
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