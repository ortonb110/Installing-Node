const path = require('path')
const adminData = require('./admin');
const express = require('express');

const Routes = express.Router();

Routes.get("/",(req, res) => {
    const products =  adminData.products;
    res.render('shop', {prods: products, docTitle: "Shop"});
    
})

module.exports = Routes