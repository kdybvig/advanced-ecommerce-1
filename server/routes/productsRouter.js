const express = require("express");
const productsRouter = express.Router();
const {list, create} = require('../controllers/productsController');

const bodyParser = require("body-parser");
productsRouter.use(bodyParser.json());

productsRouter.get('/', list);
productsRouter.post('/', create);

module.exports = productsRouter;