import React from 'react';
import './Delivery.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export const Delivery = () => {
    return(
        <div className="Delivery">
            <h2 className="containerApp">BOOK A DELIVERY SERVICE</h2>
            <div className="Big containerApp">
                <div className="Input">
                    <Form>
                        <FormGroup>
                            <Label className="inputLabel" for="Email">Email</Label>
                            <Input className="inputPlace" type="email" name="email" id="exEmail" placeholder="" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabel" for="Address">Address</Label>
                            <Input className="inputPlace" type="text" name="address" id="exAddress" placeholder="" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabel" for="Number">Phone Number</Label>
                            <Input className="inputPlace" type="text" name="phoneNumber" id="exNumber" placeholder="" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="inputLabel" for="exampleEmail">Service</Label>
                            <Input className="inputPlace" type="select">
                                <option>DEEP CLEAN</option>
                                <option>FAST CLEAN</option>
                                <option>REPAIR</option>
                                <option>REPAINT</option>
                                <option>UNYELLOWING</option>
                                <option>BAG CLEANING</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </div>
                <div className="Location">
                    <h3>Our Store Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.4119415482998!2d112.78780752923917!3d-7.2808584693803065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa15c07994bb%3A0x5c3fe53fad4c90a1!2sJl.%20Gebang%20Lor%20No.74%2C%20Gebang%20Putih%2C%20Kec.%20Sukolilo%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060117!5e0!3m2!1sen!2sid!4v1619683765642!5m2!1sen!2sid" width="1200" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}
