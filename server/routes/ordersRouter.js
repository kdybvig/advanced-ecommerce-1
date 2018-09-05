const express = require("express");
const ordersRouter = express.Router();
const {list, create} = require('../controllers/ordersController');

const bodyParser = require("body-parser");
ordersRouter.use(bodyParser.json());

ordersRouter.get('/', list);
ordersRouter.post('/', create);

module.exports = ordersRouter;