import React from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.css'
import './app.css'
import App from 'containers/App/App'

import {hashHistory} from 'react-router'
import makeRoutes from './routes'

import {Provider} from 'react-redux';
import configureStore from '_redux/store';
const store = configureStore();

const routes = makeRoutes()

const mountNode = document.querySelector('#root');
ReactDOM.render(
<Provider store={store}>
	<App history={hashHistory}
        routes={routes} />
</Provider>,
mountNode);
