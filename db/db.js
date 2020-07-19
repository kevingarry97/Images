const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/tiendra', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('Connected to mongoDB...!'))
    .catch(err => console.error(`Couldn't connect`))