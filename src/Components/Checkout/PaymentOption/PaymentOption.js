import React from 'react';
import './PaymentOption.css';
import '../Button/Button.css';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Link } from 'react-router-dom';

const PaymentOption = ()=>{
    return(
            <div className="paymentContainer">
            <div className="payOption">
                <h3>Payment Method</h3>
                <div className="creditCard">
                   
                    <div>
                        <input type="radio" id="" name="" value="" />
                    </div>
                    <div>
                        <div>
                            <strong>Credit Card</strong>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus.</p>
                        </div>
                        <div className="cardDetails">
                            <input type="number" placeholder="0000  0000  0000  0000"></input>
                            <input type="number" placeholder="MM/YY" />
                            <input type="number" placeholder="CVV"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="Card Holder Name"/>
                        </div>
                    </div>
                    
                </div>
                <div className="payPal">
                    <div>
                        <input type="radio" id="" name="" value="" />
                    </div>
                    <div>
                        <strong>PayPal</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit, tempore possimus recusandae fugit non obcaecati laboriosam necessitatibus! Eligendi, porro!</p>
                    </div>
                    <div>
                        <i class="fa fa-paypal fa-3x" aria-hidden="true"></i><span>PayPal</span>
                    </div>
                </div>
            </div>
            <div>
                <OrderSummary />
            </div>
            <div className="buttonContainer">
            <Link to = "/Checkout/OrderPlaced"><button className="Next">NEXT</button></Link>
            <Link to = "/Checkout/PaymentOption"><button className="Cancel">CANCEL</button></Link>
        </div>
        </div>
    );
}

export default PaymentOption;