// backend/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const captionRoutes = require('./routes/captionRoutes');


// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/caption', captionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
