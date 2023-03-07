const express = require('express');

const Router = express.Router()

Router.get("/add-product",(req, res, next) => {
    res.send('<form method="POST" action="/admin/add-product"><input type="text" name="title"/><button type="submit">Add</button></form>')
})

Router.post("/add-product", (req, res)=> {
    console.log(req.body);
    res.redirect('/');
})

module.exports= Router