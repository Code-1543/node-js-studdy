const express = require('express');
const Product = require('./products.json')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,"/plublic/")))

app.get('/', (req, res) => {
  res.send('Hello World!123')
  });

const PORT = 3080
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})