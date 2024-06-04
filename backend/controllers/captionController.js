// backend/controllers/captionController.js
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const generateCaption = async (req, res) => {
    const filePath = path.join(__dirname, '../', req.file.path);

    try {
        const imageBuffer = fs.readFileSync(filePath);
        const response = await axios({
            method: 'post',
            // url: 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large',
            url: 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base',
            headers: {
                'Authorization': `Bearer ${process.env.HF_API_KEY}`,
                'Content-Type': 'application/octet-stream'
            },
            data: imageBuffer
        });

        fs.unlinkSync(filePath); // Remove the file after processing

        res.json({ caption: response.data[0].generated_text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = { generateCaption };
