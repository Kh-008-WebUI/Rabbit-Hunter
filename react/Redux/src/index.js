import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {changePosition} from './Reducers/reducers'
import RabbitView from './Components/RabbitView';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(changePosition, {x: 100, y: 100});

ReactDOM.render(<Provider store = {store}>
                <RabbitView />
                </Provider>, document.getElementById('root'));

registerServiceWorker();
