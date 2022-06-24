const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index
router.get('/detail', newsController.showDetail);
router.get('/latest', newsController.showDetailLatest);

// router.use('/', newsController.index);

module.exports = router;
