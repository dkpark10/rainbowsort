'use strict';
const express = require('express');
const router = express.Router();
const rainbowColor = require('../lib/createRainbow');
const shuffle = require('../lib/shuffle');


router.get('/', (request, response) =>{

  const shuffledList = shuffle(rainbowColor.length);
  response.render("index", { rainbow: rainbowColor });
});

module.exports = router;