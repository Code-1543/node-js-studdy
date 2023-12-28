const express = require('express');
const Product = require('./products.json')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,"/plublic/")))

app.set("views", "./src/views")
app.set("view engine", "ejs")


app.get('/', (req, res) => {
  res.render('index',{username: "Win"})
  });

const PORT = 3080
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})