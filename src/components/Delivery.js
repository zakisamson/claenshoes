import React from 'react';
import './Delivery.css'
import { Form, FormGroup, Label, Input } from 'react-bootstrap';
export const Delivery = () => {
    return(
        <div className="Delivery">
            <h2 className="container">BOOK A DELIVERY SERVICE</h2>
            <div className="Big container">
                <div className="Input">
                    <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    </Form>
                </div>
                <div className="Location">
                    kolom2
                </div>
            </div>
        </div>
    );
}
