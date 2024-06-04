// backend/routes/captionRoutes.js
const express = require('express');
const multer = require('multer');
const { generateCaption } = require('../controllers/captionController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), generateCaption);

module.exports = router;
