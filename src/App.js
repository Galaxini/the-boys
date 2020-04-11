import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import SignPage from "./components/SignPage"

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
            <Route exact path="/" component={SignPage}/>
          </Switch>
        )
      }
    }
  )
)


export default withRouter(App)
