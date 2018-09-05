const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    reviews: {
        required: true,
        type: Number
    },
    rating: {
        required: true,
        type: Number
    },
    imgUrl : {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;