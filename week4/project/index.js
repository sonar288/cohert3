const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/asd', function (req, res) {
    res.send('Hello World from asd')
  })


app.listen(3000)