import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

reducers.routing = routerReducer;

import * as reducers from './reducers';
import App from './components/App';
import ShoppingList from "./components/ShoppingList";
import {LocationService} from "./services/location.service";
/*
 state shape
 {
 shoppingList:[]
 }
 */

const store = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(browserHistory, store);

function run() {
    // using location service
    let s = new LocationService();
    s.getCurrentPosition().subscribe(res => console.log(res));

    let state = store.getState();
    console.log(state);
    ReactDOM.render((<Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="/shoppingList" component={ShoppingList}/>
                    {/*<Route path="/map" component={MapComponent}/>*/}
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('root'))
}

run();

store.subscribe(run);

// const toggleTodo = (todo) => {
//     return {
//         id: 0,
//         text: "Learn Redux",
//         completed: !todo.completed
//     };
// };
//
// const testToggleTodo = () => {
//     const todoBefore = {
//         id: 0,
//         text: "Learn Redux",
//         completed: false
//     };
//     const todoAfter = {
//         id: 0,
//         text: "Learn Redux",
//         completed: true
//     };
//
//     deepFreeze(todoBefore);
//
//     expect(
//         toggleTodo(todoBefore)
//     ).toEqual(todoAfter);
// };
//
// testToggleTodo();
// console.log('All tests passed');
