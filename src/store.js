import { createStore, applyMiddleware, compose } from "redux"
import reducer from "./reducers/index"
import createSagaMiddleware from "redux-saga";
import apiSaga from "./sagas/api-saga"
import {forbiddenWordsMiddleware} from "./middleware"

// const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer
    // ,
    // storeEnhancers(
    //     applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
    //   )
    );

// initialiseSagaMiddleware.run(apiSaga);

export default store;