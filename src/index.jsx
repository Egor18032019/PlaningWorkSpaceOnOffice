import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {compose} from "recompose";
import thunk from "redux-thunk";

import {Provider} from "react-redux";
import App from "./components/app.jsx";
import combineReducers from "./components/combineReducer.js";

const store = createStore(
    combineReducers,
    compose(applyMiddleware(thunk.withExtraArgument()),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    ));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);


