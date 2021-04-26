import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Button from '../Button/Button';
import './ShippingDetails.css';

const ShippingDetails = ()=>{
    return(
        <div className="shippingContainer">
            <div className="details">
                <h3>Shipping Details</h3>
                <div className="form">
                    <div>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div>
                        <input type="" placeholder="Address"/>
                    </div>
                    <div>
                        <input type="" placeholder="Address 2"/>
                    </div>
                    <div>
                    <select name="" id="">
                        <option value="">India</option>
                        <option value="">Bangladesh</option>
                        <option value="">Nepal</option>
                        <option value="">Bhutan</option>
                    </select>
                    <input type="text" placeholder="City"/>
                    </div>
                    <div>
                    <input type="number" placeholder="Zip/Postal Code"/>
                    <input type="number" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="shippingOption">
                        <div>
                            <input type="radio" id="freeShipping" name="" value="" />
                            <label for="freeShipping"><h5>Free Shipping</h5>Between 2-5 working days</label>   
                        </div>
                        
                        <div>
                            <input type="radio" id="instant" name="" value="" />
                            <label for="instant"><h5>Next Day Delivery- $20</h5>24 hours from Checkout</label>   
                        </div>
                    </div> 
            </div>
            <div>
                <OrderSummary />
            </div>
            <Button />
        </div>
    );
}

export default ShippingDetails;