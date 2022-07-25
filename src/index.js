import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import { StaticRouter } from 'react-router-dom/server'
import Routes from '@/routes'

import { Provider } from 'react-redux'
import { getStore } from '@/store'
import qs from 'qs'

import StyleContext from 'isomorphic-style-loader/StyleContext'

import { Helmet } from "react-helmet"

const app = express()
app.use(express.static('public'))

const render = (req, res) => {
  const params = qs.parse(req.query)

  // 从 store 中获得初始 state
  const preloadedState = { home: { infoList: params.aa ? [params.aa] : [] } }

  const store = getStore(preloadedState)

  const css = new Set() // CSS for all rendered React components
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

  const helmet = Helmet.renderStatic();

  const content = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
            { Routes }
          </StaticRouter>
      </Provider>
    </StyleContext.Provider>
  )
  
  setTimeout(() => {
    const renderFullPage = (content, preloadedState) => {
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <style>${[...css].join('')}</style>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
          </script>
          <script src='/index.js'></script>
        </body>
      </html>`
    }

    res.status(200).send(renderFullPage(content, preloadedState));
  }, 0)
}

app.use(render);

// app.get('*', (req, res) => {
//   res.send(render(req))
// })

app.listen(8888, () => {
  console.log('listen :8888')
})

