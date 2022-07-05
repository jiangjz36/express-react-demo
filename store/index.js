import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer as homeReducer } from './reducer/home'

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = (preloadedState = null) => createStore(reducer, preloadedState, applyMiddleware(thunk))