import React from 'react';
import './Project.css';
import image4 from '../../Image/Projects/project_1/4.jpg'
import image5 from '../../Image/Projects/project_1/5.png'
import image6 from '../../Image/Projects/project_1/6.jpg'

const Project_3 = () => {
    const images = [
        {
            src: image4,
            title: "The Loop",
        },
        {
            src: image6,
            title: "U16 House",
        },
        {
            src: image5,
            title: "OMA Baserria",
        },
    ];

    return (
        <div>
            <div className="flex justify-between p-8">
                {images.map((image, index) => (
                    <div key={index} className="w-1/3 p-4 image-container">
                        <div className="overflow-hidden">
                            <img src={image.src} alt={image.title} className="object-cover w-full h-96 zoom-image" />
                        </div>
                        <p className="mt-2 text-center text-lg font-semibold">{image.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project_3;
