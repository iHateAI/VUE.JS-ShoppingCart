const express = require('express');

const router = express.Router();

//setting router
router.get('/', (req, res) => {
  res.json({
    test: 'test',
  });
});
