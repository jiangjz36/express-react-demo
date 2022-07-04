import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import { StaticRouter } from 'react-router-dom/server'
import Routes from '../Routes'

const app = express()
app.use(express.static('public'))

const render = (req) => {
  const content = renderToString(
    <StaticRouter location={req.url}>
      { Routes }
    </StaticRouter>
  )
  const template = 
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src='/index.js'></script>
    </body>
  </html>`
  return template
}

app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(3000)

