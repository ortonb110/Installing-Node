const path = require('path')
const express = require('express');

const Router = express.Router()

const products = [];

Router.get("/add-product",(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views', 'add-product.html'))
})

Router.post("/add-product", (req, res)=> {
    products.push({title: req.body.title})
    res.redirect('/');
})

exports.Router = Router;
exports.products = products