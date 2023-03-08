const path = require('path');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');


const express = require("express");
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes)

app.use(shopRoutes);

app.use((re, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
})

app.listen(5000, ()=> {
    console.log("Server is running");
})
