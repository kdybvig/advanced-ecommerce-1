const express = require("express");
const app = express();
const ordersRouter = require('./routes/ordersRouter');
const productsRouter = require('./routes/productsRouter');
const cors = require('cors');
app.use(cors());

app.use('/orders', ordersRouter);
app.use('/products', productsRouter);

const mongoose = require("mongoose");
mongoose.promise = global.Promise;
mongoose.connect(`mongodb://keith:eCommerce1@ds149501.mlab.com:49501/advanced-ecommerce-1`);


app.listen(3001, err => {
    if(err) throw err;
    console.log('Server is listening on PORT 3001')
});