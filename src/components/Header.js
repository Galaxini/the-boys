import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import "./styles/Header.css"

const Header = inject("mainStore")(
    observer(
        class Header extends Component {
            constructor(props) {
                super(props);
                this.state = {
                };
            }

            renderMain = () => {
                return(
                    <div className="header-root">
                        <div className="header-container">
                            <div className="header-text">
                                Тут Header
                            </div>
                            <div className="header-login">
                                Тут Login
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

export default withRouter(Header)