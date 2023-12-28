const express = require('express');
const Product = require('./products.json')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
  });

const PORT = 3080
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})