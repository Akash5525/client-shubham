import React from 'react';
import Project2 from './Project_2';
import Project3 from './Project_3';
import Project4 from './Project_4';
import SubNavbar from '../SubNavbar';
import './Project.css';
import image1 from '../../Image/Projects/project_1/1.jpg'
import image2 from '../../Image/Projects/project_1/2.jpg'
import image3 from '../../Image/Projects/project_1/3.jpg'

const Project_1 = () => {
    const images = [
        {
            src: image1,
            title: "RAS TOWNSHIP,RAJASTHAN",
        },
        {
            src: image2,
            title: "STUDIOS 90,KARNATAKA",
        },
        {
            src: image3,
            title: "THE PEARL,OMAN",
        },
    ];

    return (
        <div>
        <SubNavbar/>
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
            <Project3 />
            <Project2 />
            <Project4 />
        </div>
    );
};

export default Project_1;
