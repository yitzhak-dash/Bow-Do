/**
 * Created by Yitzh on 8/28/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
reducers.routing = routerReducer;


import * as reducers from './reducers';
import App from './components/App';
import ShoppingItems from "./components/ShoppingItems";
/*
 state shape
 {
 shoppingList:[]
 }
 */

const store = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(browserHistory, store);

function run() {
    var state = store.getState();
    console.log(state);
    ReactDOM.render((<Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="/shoppingItems" component={ShoppingItems}/>
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root'))
}

run();

store.subscribe(run);