import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import './ShippingDetails.css';
import { Link } from 'react-router-dom';
import '../Button/Button.css';
import useForm from './useForm';
import validate from './validationInfo';

const ShippingDetails = ()=>{

    const {handleFormInputChange, values, handleFormSubmit, errors} = useForm(validate);

console.log(errors);
    return(
        <div className="shippingContainer">
            <div className="details">
                <h3>Shipping Details</h3>
                <div className="form">
                    <div>
                        <div>
                        <input id="firstname" name="firstname" type="text" placeholder="First Name" value={values.firstname} onChange={handleFormInputChange}/>
                        <input id="lastname" name="lastname" type="text" placeholder="Last Name" value={values.lastname} onChange={handleFormInputChange}/>
                        </div>
                        <div className="errorContainer">
                        { errors.firstname && <p>{errors.firstname}</p>}
                        { errors.lastname&& <p>{errors.lastname}</p>}
                        </div>
                    </div>
                    
                    
                    <div>
                        <input id="address1" name="address1" type="" placeholder="Address 1" value={values.address1} onChange={handleFormInputChange}/>
                        { errors.address1 && <p>{errors.address1}</p>}
                    </div>
                    <div>
                        <input id="address2" name="address2" type="" placeholder="Address 2" value={values.address2} onChange={handleFormInputChange}/>
                        { errors.address2 && <p>{errors.address2}</p>}
                    </div>
                    <div>
                    <input id="email" name="email" type="email" placeholder="E-mail" value={values.email} onChange={handleFormInputChange}/>
                    { errors.email && <p>{errors.email}</p>}
                    </div>
                    <div>
                        <div>
                            <input id="pincode" name="pincode" type="number" placeholder="Zip/Postal Code" value={values.pincode} onChange={handleFormInputChange}/>
                            <input id="phone" name="phone" type="number" placeholder="Phone Number" value={values.phone} onChange={handleFormInputChange}/>
                        </div>
                        <div className="errorContainer">
                        { errors.pincode && <p>{errors.pincode}</p>}
                        { errors.phone&& <p>{errors.phone}</p>}
                        </div>
                    
                    </div>
                </div>
                <div className="shippingOption">
                        <div>
                            <input type="radio" id="freeshipping" name="freeshipping" value={values.freeshipping} onChange={handleFormInputChange} />
                            <label for="freeShipping"><h5>Free Shipping</h5>Between 2-5 working days</label>   
                        </div>
                        
                        <div>
                            <input type="radio" id="instant" name="instant" value={values.instant} onChange={handleFormInputChange} />
                            <label for="instant"><h5>Next Day Delivery- $20</h5>24 hours from Checkout</label>   
                        </div>
                    </div> 
            </div>
            <div>
                <OrderSummary />
            </div>
            <div className="buttonContainer">
            <Link to = "/Checkout/PaymentOption"><button onClick={handleFormSubmit} className="Next">NEXT</button></Link>
            <Link to = "/Checkout/ShippingDetails"><button className="Cancel">CANCEL</button></Link>
        </div>
        </div>
    );
}

export default ShippingDetails;