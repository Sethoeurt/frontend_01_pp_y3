import React, { useState } from 'react';
import { Button, Input, Box } from '@mui/material';
import resume_builder from '../../assets/resume_builder.jpg'


const ImageUpload = () => {

    const [image, setImage] = useState(null);
    const storedImage = localStorage.getItem('uploadedImage');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleUpload = () => {
        localStorage.setItem('uploadedImage', URL.createObjectURL(image));
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: '1rem'
            }}
        >
            <Box>
                <label
                    htmlFor="image-upload"
                >
                    <Button
                        variant="contained"
                        component="span"
                    >
                        Upload or Change Image
                    </Button>
                </label>
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    sx={{ display: 'none' }}
                    id="image-upload"
                />
            </Box>

            {
                image ? (
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Uploaded"
                        width={100}
                        height={100}
                        style={{
                            borderRadius: '50%'
                        }}
                    />
                ) : (
                    <img
                        src={storedImage ? storedImage : resume_builder}
                        alt="Uploaded"
                        width={100}
                        height={100}
                        style={{
                            borderRadius: '50%'
                        }}
                    />
                )
            }

            <Button
                variant="contained"
                onClick={handleUpload}
            > Save Image
            </Button>
        </Box>
    );
};

export default ImageUpload;
