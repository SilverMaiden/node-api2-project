const express = require('express');
const postRoutes = require('./postRoutes');
const singlePostRoutes = require('./singlePostRoutes');
const commentsRoutes = require('./commentsRoutes');

const router = express.Router();

router.use('/posts', postRoutes);
router.use('/posts', singlePostRoutes);
router.use('/posts', commentsRoutes);

module.exports = router;
