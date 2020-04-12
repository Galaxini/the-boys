import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import "./styles/Landing.css"


const Landing = inject("mainStore")(
    observer(
        class Landing extends Component {
            constructor(props) {
                super(props);
                this.state = {
                };
            }

            renderMain = () => {
                return(
                    <div className="landing-root">
                        <div className="landing-top" style={{backgroundImage: 'url(https://source.unsplash.com/collection/578055/1600x900)'}}>
                            <div className="landing-top-content">
                                <div className="landing-top-content-text">
                                    Тут Landing
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

export default withRouter(Landing)
