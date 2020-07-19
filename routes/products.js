const mongoose = require('mongoose')
const express = require('express')
const { Product } = require('../model/product')

const router = express.Router()

router.get('/', async (req, res) => {
    const product = await Product.find()
    res.send(product)
})

module.exports = router;