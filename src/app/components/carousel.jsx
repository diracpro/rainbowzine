import React, { useState, useRef, useEffect } from 'react';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  // Function for automatic slide switching
  const handleAutoplay = () => {
    handleNext();
  };

  // UseEffect hook for autoplay functionality
  useEffect(() => {
    const intervalId = setInterval(handleAutoplay, 6000); // Change 6000 to adjust interval (in milliseconds)
    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, [currentSlide, slides.length]); // Dependencies: currentSlide to reset timer on slide change

  return (
    <div>
      <div className="relative overflow-hidden w-full md:h-120 rounded-b-3xl">
        <div className="flex transition duration-700 ease-in-out transform -translate-x">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full h-full flex items-center justify-center ${
                index === currentSlide ? 'block' : 'hidden'
              }`}
            >
              <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100">
                {slide.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full mb-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-2 rounded-full mt-5 ${
              index === currentSlide ? 'bg-teal-500' : 'bg-gray-200'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;