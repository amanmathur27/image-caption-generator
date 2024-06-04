// frontend/src/components/ImageUploader.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = ({ onCaptionGenerated }) => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('/api/caption', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            onCaptionGenerated(response.data.caption, imageUrl);
        } catch (error) {
            console.error('Error generating caption:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <input type="file" onChange={handleImageUpload} className='border-[1px] rounded-lg pt-2 h-12 px-5 w-auto'/>
            <button type="submit" className='bg-slate-800 px-5 py-3 rounded-2xl max-w-auto'>Generate Caption</button>
        </form>
    );
};

export default ImageUploader;
