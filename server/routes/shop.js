const path = require('path')

const express = require('express');

const Routes = express.Router();

Routes.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'shop.html'));
    
})

module.exports = Routes