import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './store/reducers';
import appHistory from './history';
import HomeComponent from './components/HomeComponent';
import ProjectList from './components/ProjectList';
import projectApi from './api/project.api';

export class App extends React.Component {
  render() {
    projectApi.get('')
    .then(console.log);
    return (
      <Provider store={createStore(reducers, applyMiddleware(reduxThunk))}>
        <Router history={appHistory}>
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/projects" exact component={ProjectList}></Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
