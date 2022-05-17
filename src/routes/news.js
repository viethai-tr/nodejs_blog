const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index
router.use('/detail', newsController.showDetail);
router.use('/latest', newsController.showDetailLatest);

// router.use('/', newsController.index);

module.exports = router;