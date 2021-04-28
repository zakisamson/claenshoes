import React from 'react';
import InstagramImage from "../assets/instagram.svg"
import './CP.css'

export const CP = () => {
    return(
        <div className="CP">
            <p>any questions? ask on our social media</p>
            <div className="insta">
                <img src={InstagramImage}></img>
                <a href="/">claen.shoes</a>
            </div>
        </div>
    );
}
