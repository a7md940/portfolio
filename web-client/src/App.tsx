import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import appHistory from './history';
import HomeComponent from './components/HomeComponent';
import ProjectList from './components/ProjectList';

export class App extends React.Component {

  render() {
    return (
      <Router history={appHistory}>
        <Switch>
          <Route path="/" exact component={HomeComponent}></Route>
          <Route path="/projects" exact component={ProjectList}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
