import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Wrap from './Components/Wrap'
import HunterForm from './Components/HunterForm';
import './scss/index.scss';
import { createStore, combineReducers, bindActionCreators } from 'redux';
import * as actions from "./Action/Actions";
import * as reducers from './Reducers/index';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const store = createStore(combineReducers(reducers));

var WrapCtrl = connect(
    state => ({
        x : state.rabbit.x,
        y: state.rabbit.y,
        hunter:state.rabbit.hunters
    }),
    dispatch => bindActionCreators(
        actions
    , dispatch)
)(Wrap)
var HunterFormCtrl = connect(
    state => ({
        hunter:state.rabbit.hunters
    }),
    dispatch => bindActionCreators(
        actions
    , dispatch)
)(HunterForm)

ReactDOM.render((
	<Provider store={store}>
            <Router>
                <div>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                  </ul>

                  <hr/>
                  <Switch>
                    <Route exact path="/" component={WrapCtrl}/>
                    <Redirect from="/about" to="/hunters"/>
                    <Route path="/hunters"  component={HunterFormCtrl}/>
                  </Switch>
                </div>
            </Router>
	</Provider>),
	 document.getElementById("root")
);