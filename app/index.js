import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Wrap from './Components/Wrap'
import HunterForm from './Components/HunterForm';
import {Navigation} from './Components/Navigation';
import './scss/index.scss';
import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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

const store = createStore(combineReducers(reducers),applyMiddleware(thunk));

let WrapCtrl = connect(
    state => ({
        x : state.rabbit.x,
        y: state.rabbit.y,
        hunter:state.rabbit.hunters,
        isDead:state.rabbit.isRabbitDead
    }),
    dispatch => bindActionCreators(
        actions
    , dispatch)
)(Wrap)
let HunterFormCtrl = connect(
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
                <div className="">
                  <Navigation />
                  <Switch>
                    <Route exact path="/Rabbit-Hunter-Redux/dist/" component={WrapCtrl}/>
                    <Redirect from="/Rabbit-Hunter-Redux/dist/about" to="/Rabbit-Hunter-Redux/dist/hunters"/>
                    <Route path="/Rabbit-Hunter-Redux/dist/hunters"  component={HunterFormCtrl}/>
                  </Switch>
                </div>
            </Router>
	</Provider>),
	 document.getElementById("root")
);