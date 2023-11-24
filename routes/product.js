const express = require('express')
const routes = express.Router()
const {getAllProducts,getAllTesting} = require("../controller/product")
routes.route("/").get(getAllProducts);
routes.route("/testing").get(getAllTesting);

module.exports = routes;