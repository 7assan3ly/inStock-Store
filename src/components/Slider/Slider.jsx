import React from 'react'
import './Slider.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Slider1 from '../../assets/img/slider1.jpg'
import Slider2 from '../../assets/img/slider2.jpeg'
import Slider3 from '../../assets/img/slider3.jpg'

const Slider = () => {

    const slide = (
        <AwesomeSlider>
            <div className='slideImg firstSlide'>
            &nbsp;
            </div>
            <div className='slideImg secondSlide'>
            &nbsp;
            </div>
            <div className='slideImg thirdSlide'>
            &nbsp;
            </div>
        </AwesomeSlider>
    );

    return (
        <div className='sliderSec'>
            {slide}
        </div>
    )
}

export default Slider