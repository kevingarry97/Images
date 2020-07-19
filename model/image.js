const mongoose = require('mongoose')
const { productSchema } = require('./product')

const imageSchema = new mongoose.Schema({
    image: {
        type: [ String ],
        required: true
    },
    product: {
        type: productSchema,
        required: true
    }
})

const Image = mongoose.model('Image', imageSchema)

exports.Image = Image;