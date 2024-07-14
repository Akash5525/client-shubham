import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'font-awesome/css/font-awesome.min.css';

const items = [
  {
    image: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    title: "Mukunda - Shotru - Trailer",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    duration: "1h : 56min",
    genre: "Action",
  },
  {
    image: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
    title: "Mukunda - Shotru - Trailer",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    duration: "1h : 56min",
    genre: "Action",
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg",
    title: "Mukunda - Shotru - Trailer",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    duration: "1h : 56min",
    genre: "Action",
  },
];

const Slider = () => {
  const mainCarousel = useRef(null);
  const thumbCarousel = useRef(null);

  const renderItems = () =>
    items.map((item, index) => (
      <div
        key={index}
        className="relative w-full h-[500px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="bg-overlay grid grid-cols-1 lg:grid-cols-2 py-20 md:py-28 lg:py-32 xl:py-56 px-3 md:px-4 lg:px-8">
          <div className="flex flex-col gap-5 md:gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
              <div className="flex gap-3">
                <p>{item.duration}</p>
                <p>
                  <strong className="font-bold">Genres:</strong> <span>{item.genre}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 md:gap-4">
              <a href="single-video.html" className="btn btn-secondary">
                Watch Now <i className="pl-2 fa fa-play"></i>
              </a>
              <button className="btn btn-primary">
                Add To List <i className="pl-2 fa fa-plus"></i>
              </button>
              <button className="outline-icon w-10 h-10 border border-acent rounded-full flex items-center justify-center">
                <i className="fa fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

  const renderThumbnails = () =>
    items.map((item, index) => (
      <div key={index} className="item">
        <img src={item.image} className="w-64 h-72 object-cover rounded-xl" alt={`thumbnail ${index}`} />
      </div>
    ));

  const slideNext = () => {
    mainCarousel.current.slideNext();
    thumbCarousel.current.slideNext();
  };

  const slidePrev = () => {
    mainCarousel.current.slidePrev();
    thumbCarousel.current.slidePrev();
  };

  return (
    <section className="relative">
      <AliceCarousel
        mouseTracking
        infinite
        items={renderItems()}
        autoPlay
        autoPlayInterval={3000}
        animationDuration={800}
        disableDotsControls
        disableButtonsControls
        ref={mainCarousel}
      />
      <div className="hidden lg:block absolute top-1/4 right-8 bg-slate-700 py-5 pl-5 rounded-xl z-10 w-[450px]">
        <AliceCarousel
          mouseTracking
          infinite
          items={renderThumbnails()}
          autoPlay
          autoPlayInterval={3000}
          animationDuration={800}
          disableDotsControls
          disableButtonsControls
          ref={thumbCarousel}
        />
        <div className="flex flex-row gap-3 pt-4">
          <button type="button" onClick={slidePrev} className="customPrevBtn py-1 px-2 rounded-sm bg-primary text-white hover:bg-acent">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button type="button" onClick={slideNext} className="customNextBtn py-1 px-2 rounded-sm bg-primary text-white hover:bg-acent">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
