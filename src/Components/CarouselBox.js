import React from 'react';
import { Slide } from 'react-slideshow-image'
import img1 from '../ slider/BG_1.jpg';
import img2 from '../ slider/BG_3.jpg';
import img3 from '../ slider/BG_4.jpg';
import './Carousel.css';



const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
};

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
            </Slide>
            <p className="slider_txt">Try</p>
            <p className="slider_txt_2">new recipes for you every day!</p>
        </div>
    )
};

export default Slideshow;



