import React from 'react';
import './Hero.css'
import HeroImage from "../assets/soes2.jpg"

export const Hero = () => {
    return(
        <div className="Hero">
            <img src={HeroImage}></img>
            <div className="container">
                <p>Sepatu<br></br> Seperti<br></br>Baru.</p>
                <a href="/">BOOK A DELIVERY</a>
            </div>
        </div>
    );
}
