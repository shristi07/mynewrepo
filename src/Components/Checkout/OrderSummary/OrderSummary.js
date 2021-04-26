import React from 'react';
import './OrderSummary.css';

const OrderSummary = () => {
    return(
        <div className="summaryContainer">
            <h3>Summary</h3>
            <div>
            <div className="productSummary">
                <div>
                    <div className="img"></div>
                    <div><h5>PRODUCT NAME</h5>$ 300</div>
                </div>
                <div>
                    <div className="img"></div>
                    <div><h5>PRODUCT NAME</h5>$ 300</div>
                </div>
            </div>
            <div className="costBreak">
                <ul>
                    <li>SUBTOTAL</li>
                    <li>SHIPPING</li>
                    <li>TAXES</li>
                    <li> TOTAL</li>
                </ul>
                <ul>
                    <li>$600</li>
                    <li>FREE</li>
                    <li>$13</li>
                    <li>$613</li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default OrderSummary;