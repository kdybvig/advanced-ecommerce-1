const Order = require('../models/order');

module.exports.list = (req, res) => {
    Order.find({}, (err, orders) => {
        if (err) res.send(err);
        res.json(orders);
    });   
}

module.exports.create = (req, res) => {
    const newOrder = Order(req.body);
    newOrder.save();
    res.json(newOrder);
}