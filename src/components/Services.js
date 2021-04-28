import React from 'react';
import './Services.css'
import { Services_lists } from './Services_lists';
import Shoes from "../assets/Shoes_mid4.svg"

export const Services = () => {
    return(
        <div className="Services">
            <h2 className="container">SERVICES</h2>
            <div className="servicesCtn container">
                <div className="col1">
                    <Services_lists heading="DEEP CLEAN" subheading="cleans your shoes to the nook and cranny" price="Rp. 90.000" />
                    <Services_lists heading="REPAIR" subheading="we care for your shoes health" price="Rp. 80,000 ~ Rp. 150,000" />
                    <Services_lists heading="UNYELLOWING" subheading="cleans your shoes to the nook and cranny" price="Rp. 60,000" />
                </div>
                <div className="col2">
                    <img src={Shoes}></img>
                </div>
                <div className="col3">
                <Services_lists heading="FAST CLEAN" subheading="cleans the outside of your shoes" price="Rp. 50,000" />
                <Services_lists heading="REPAINT" subheading="restoring the glory of your shoes" price="Rp. 100,000" />
                <Services_lists heading="BAG CLEANING" subheading="who said we only cleans shoes? we do bags too" price="Rp. 90,000 ~ Rp. 150,000" />
                </div>
            </div>
        </div>
    );
}
