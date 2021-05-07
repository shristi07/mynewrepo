import React from 'react';
import { useSelector } from 'react-redux';
import './OrderSummary.css';

const OrderSummary = () => {
    const data = useSelector(state => state);
    let calPrice = 0;
    for(let i = 0; i < data.length; i++){
        calPrice = data[i].price + calPrice;
    }

    let shipping = 50;
    let discount = 0;
    if (calPrice > 500) {
    shipping = 0;
    discount = 10/calPrice * 100}
    if(calPrice === 0) {
        shipping=discount=0;
    }
    let total = calPrice + shipping - discount; 

    return(
        <div className="summaryContainer">
            <h3>Summary</h3>
            <div>
            <div className="productSummary">
                {data.map(x =><div>
                    <div className="img"><img src = {x.img} alt = "product" /> </div>
                    <div><h5>{x.name}</h5>${x.price}</div>
                </div> )}
                
                
            </div>
            <div className="costBreak">
            <ul>
            <li></li>
                        <li>SUBTOTAL</li>
                        <li>SHIPPING</li>
                        <li>TAXES</li>
                        <li><strong>TOTAL</strong></li>
                    </ul>
                    <ul>
                    <li></li>
                        <li>{calPrice}</li>
                        <li>{shipping}</li>
                        <li>{discount}</li>
                        <li><strong>{total}</strong></li>
                    </ul>
            </div>
            </div>
        </div>
    );
};

export default OrderSummary;