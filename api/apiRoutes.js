const express = require('express');
const postRoutes = require('./postRoutes');
const singlePostRoutes = require('./singlePostRoutes');

const router = express.Router();

router.use('/posts', postRoutes);
router.use('/posts', singlePostRoutes)

module.exports = router;
