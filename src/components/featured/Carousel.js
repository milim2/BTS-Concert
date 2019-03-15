import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carousel = () => {

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
}

    return (
        <div
            className="carousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            <Slider  {...settings}>
                <div 
                className="carousel_image"
                style={{
                    background:`url(${slide_one})`,
                    height: `${window.innerHeight}px`
                }}
                >                
                </div>
                <div 
                className="carousel_image"
                style={{
                    background:`url(${slide_two})`,
                    height: `${window.innerHeight}px`
                }}
                >                
                </div>
                <div 
                className="carousel_image"
                style={{
                    background:`url(${slide_three})`,
                    height: `${window.innerHeight}px`
                }}
                >                
                </div>

            </Slider>

        </div>
    );
};

export default Carousel;
