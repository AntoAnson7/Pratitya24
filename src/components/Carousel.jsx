
import React, { useState } from 'react';
import "./Carousel.css";



function Carousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={prevSlide}>&lt;</button>
     
        <div className="slide" style={{ backgroundImage: `url(${slides[currentSlide].src})` }}>
          <span className="image-alt">{slides[currentSlide].alt}</span>
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>&gt;</button>
        <div className="indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Carousel;
  
