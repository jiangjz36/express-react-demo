import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../routes'

import { Provider } from 'react-redux'
import { getStore } from '../store'

const preloadedState = window.__INITIAL_STATE__
console.log('preloadedState ->>', preloadedState)

const store = getStore(preloadedState)
console.log('store ->>', store)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      { Routes }
    </BrowserRouter>
  </Provider>
)

hydrateRoot(document.getElementById('root'), <App />)