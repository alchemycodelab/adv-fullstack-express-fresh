const express = require('express')
const path = require('path')

const app = express()

app.get('/api/test', (req, res) => {
  res.send('it works!')
})
app.get('/api/users', (req, res) => {
  res.send('it works!')
})

app.use('/', express.static(path.resolve(__dirname, '..', 'public')))

const port = process.env.PORT || 8001
const server = app.listen(port, () => {
  console.log(`[server] listening on ${port}`)
})