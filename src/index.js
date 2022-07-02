import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Home from '../containers/Home'

const app = express()
app.use(express.static('public'))
// const Home = () => {
//   return <div>Hello React SSR!11</div>
// }
const content = renderToString(<Home />)

const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ssr</title>
  </head>
  <body>
    <div id="root">${content}</div>
    <script src='/index.js'></script>
  </body>
</html>
`
app.get('/', function (req, res) {
  res.send(template)
})

app.listen(3000)

