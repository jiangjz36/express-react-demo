import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Routes from '@/routes'

import { Provider } from 'react-redux'
import { getStore } from '@/store'

import StyleContext from 'isomorphic-style-loader/StyleContext'

const preloadedState = window.__INITIAL_STATE__

const store = getStore(preloadedState)

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      { Routes }
    </BrowserRouter>
  </Provider>
)

hydrateRoot(document.getElementById('root'), (
  <StyleContext.Provider value={{ insertCss }}>
    <App />
  </StyleContext.Provider>
))