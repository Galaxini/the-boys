import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Link from '@material-ui/core/Link';

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