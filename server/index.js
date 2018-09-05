const express = require("express");
const app = express();
const ordersRouter = require('./routes/ordersRouter');
const productsRouter = require('./routes/productsRouter');

app.use('/orders', ordersRouter);
app.use('/products', productsRouter);

const mongoose = require("mongoose");
mongoose.promise = global.Promise;
mongoose.connect(`mongodb://keith:eCommerce1@ds231242.mlab.com:31242/checkpoint1`);


app.listen(3001, err => {
    if(err) throw err;
    console.log('Server is listening on PORT 3001')
});