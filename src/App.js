import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './App.css';
import SignInPage from "./components/SignInPage"
import SignUpPage from "./components/SignUpPage"
import Forgot from "./components/Forgot"


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
          <Switch>
            <Route exact path="/" component={SignInPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/forgot" component={Forgot}/>
          </Switch>
        )
      }
    }
  )
)


export default withRouter(App)
