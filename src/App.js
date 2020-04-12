import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './App.css';
import SignInPage from "./components/SignInPage"
import SignUpPage from "./components/SignUpPage"
import Forgot from "./components/Forgot"
import Header from "./components/Header"
import Landing from "./components/Landing"



const App = inject("mainStore")(
  observer(
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
        };
    }
      render() {
        return (
          <div>
            <Header/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/signup" component={SignUpPage}/>
              <Route exact path="/forgot" component={Forgot}/>
            </Switch>
          </div>  
        )
      }
    }
  )
)


export default withRouter(App)
