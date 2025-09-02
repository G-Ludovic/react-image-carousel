import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  console.log(data);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill />
      {data.map((item, index) => {
        return (    
            <img src={item.src} alt={item.alt} key={index.item}/>    
        );
      })}
      <BsArrowRightCircleFill />
      <span>
        {data.map((_, index) => {
          return <button type="button" key={index.item} onClick={null}></button>
        })}
      </span>
    </div>
  ); 
};
