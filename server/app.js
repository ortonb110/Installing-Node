const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

const express = require("express");
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes)

app.use(shopRoutes);

app.use((re, res) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(5000, ()=> {
    console.log("Server is running");
})
