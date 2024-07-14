import React from 'react';
import spiderman from '../../Image/video/spiderman.mp4';
const Home4 = () => {
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={spiderman}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-white">sample testig</h1>
              <p className="mt-10 text-lg font-medium text-white">.......................</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      </div>
  );
};

export default Home4;
