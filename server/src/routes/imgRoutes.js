const express = require("express");
const router = express.Router();
const {getImages} = require('../controllers/imgController');

router.get('/get-images',getImages);

module.exports = router;
