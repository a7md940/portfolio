import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import './App.scss';

import { appReducers } from './store/reducers';
import appHistory from './history';
import HomeComponent from './components/HomeComponent';
import ProjectList from './components/ProjectList';
import Navbar from './Navbar';
import CreateProject from './components/CreateProject';
export class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(appReducers, applyMiddleware(reduxThunk))}>
        <Router history={appHistory}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/projects" exact component={ProjectList}></Route>
            <Route path="/projects/create" exact component={CreateProject}></Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
