const express = require('express')
const uploads = require('../multer')
const { Image } = require('../model/image')
const { Product } = require('../model/product')

const router = express.Router()

router.get('/product', async (req, res) => {
    const images = await Image.find()
    res.send(images)
})

router.post('/uploads', uploads.array('files'), async (req, res) => {
    
    const urls = []
    let files = req.files
    const url = req.protocol + '://' + req.get('host')

    for(const file of files) {
        const { path } = file

        urls.push(url + '/image/' +path)
    }

    const product = await Product.findById(req.body.productId)
    if(!product) return res.status(404).send('Not Found');

    let image = new Image({
        image: urls,
        product
    })

    image = await image.save()
    res.send(image);
})

module.exports = router;