import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";
import { useState } from "react";

export const Carousel = ({ data }) => {
  console.log(data);

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, index) => {
        return (    
            <img 
              src={item.src} 
              alt={item.alt} 
              key={index.item} 
              className={slide === index ? "slide" : "slide slide-hidden"} />    
          );
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button 
              type="button" 
              key={index.item} 
              onClick={() => setSlide(index)} 
              className={slide === index ? "indicator" : "indicator indocator-inactive"} />
          );
        })}
      </span>
    </div>
  ); 
};

