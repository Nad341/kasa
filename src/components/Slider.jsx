import React, { useState } from 'react';
import Banner from './Banner';

function Slider(props) {
    const images = props.images;
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent(current < images.length - 1 ? current + 1 : 0);
    };

    const handlePrevious = () => {
        setCurrent(current > 0 ? current - 1 : images.length - 1);
    };

    return (
        <div className="slider">
            <div className="next_slider" onClick={(e)=>handleNext()}><i className="fa-solid fa-chevron-right"></i>  </div>
            <div className="previous_slider" onClick={(e)=>handlePrevious()}><i className="fa-solid fa-chevron-left"></i></div>
            <Banner urlImage={images[current]} height="415px" />
        </div>
    )
}

export default Slider;