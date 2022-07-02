import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

const Home = () => {
  return <div>Hello React SSR!11</div>
}
const content = renderToString(<Home />)

const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ssr</title>
  </head>
  <body>
    ${content}
  </body>
</html>
`
app.get('/', function (req, res) {
  res.send(template)
})

app.listen(3000)

