const express=require('express')
const bodyParser=require('body-parser')
const app = express()
const images = require('./routes/images')
const products = require('./routes/products')
const { mongoose } = require('./db/db')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use('/api', images)
app.use('/api/products', products)

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}`));