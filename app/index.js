import './scss/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { Provider } from 'react-redux'
import store from '../store'
import App from '../components/App'
import HunterCreate from "../containers/HunterCreate"
import HuntersList from "../containers/HuntersList"
import SetHareLocationForm from "../containers/SetHareLocationForm"


render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <Route path='/hunter'>
                <Route path='create' component={HunterCreate} />
                <Route path='list' component={HuntersList} />
            </Route>   
            <Route path='/hare'>   
                <Route path='setCoordinates' component={SetHareLocationForm} />
            </Route>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
