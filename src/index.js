import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import { StaticRouter } from 'react-router-dom/server'
import Routes from '../routes'

import { Provider } from 'react-redux'
import { getStore } from '../store'
import qs from 'qs'


const app = express()
app.use(express.static('public'))

const render = (req, res) => {
  const params = qs.parse(req.query)
  console.log('params ->>', params)

  // 从 store 中获得初始 state
  const preloadedState = { home: { infoList: [params.aa] } }

  const store = getStore(preloadedState)


  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        { Routes }
      </StaticRouter>
    </Provider>
  )

  
  
  const renderFullPage = (content, preloadedState) => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>ssr</title>
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

  res.send(renderFullPage(content, preloadedState));
}

app.use(render);

// app.get('*', (req, res) => {
//   res.send(render(req))
// })

app.listen(3000)

