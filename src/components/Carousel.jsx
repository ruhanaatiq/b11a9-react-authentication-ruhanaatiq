import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      src: "https://i.ibb.co.com/WpHNK5Qb/caraousel1.jpg",
      alt: "Electricity Bill",
      title: "Pay Electricity Bills Easily"
    },
    {
      id: 2,
      src: "https://i.ibb.co.com/FkcKHPFp/caraousel2.jpg",
      alt: "Gas Bill",
      title: "Hassle-Free Gas Bill Payments"
    },
    {
      id: 3,
      src: "https://i.ibb.co.com/Z69MzQFw/water.jpg",
      alt: "Water Bill",
      title: "Stay Hydrated – Pay Water Bills"
    },
    {
      id: 4,
      src: "https://i.ibb.co.com/20yxcjxY/caraousel4.jpg",
      alt: "Internet Bill",
      title: "Always Stay Connected – Internet Bills"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="carousel-inner flex transition-all duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-item w-full flex-shrink-0">
            <div className="relative w-full h-[300px] md:h-[500px]">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0   flex items-center justify-center">
                <h2 className="text-yellow-300 text-xl md:text-3xl font-semibold text-center px-4">
                  {slide.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        &#60;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        &#62;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
