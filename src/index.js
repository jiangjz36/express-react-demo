import express from 'express'

import serverRender from './serverRender'

const app = express()
app.use(express.static('public'))

app.use(serverRender);

// app.get('*', (req, res) => {
//   res.send(render(req))
// })

app.listen(8888, () => {
  console.log('listen http://localhost:8888')
})

