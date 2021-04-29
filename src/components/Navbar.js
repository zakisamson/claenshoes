import React from 'react';
import './Navbar.css'

export const Navbar = () => {
    return(
        <div className="Nav">
            <div className="Navbar">
                <div className="col1 containerApp">
                    <h3>ClaenShoes</h3>
                </div>
                <div className="col2">
                    <a href="/">Services</a>
                    <a href="/">Location</a>
                    <a href="/">Book</a>
                </div>
            </div>
        </div>
    );
}