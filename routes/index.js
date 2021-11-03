const express = require('express');
const { appGNCtr } = require('../controllers');

const router = express.Router();

router.get('/:number', appGNCtr);

module.exports = router;