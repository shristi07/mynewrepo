import React, { useState } from 'react';
import './ShoppingCart.css';
import '../Button/Button.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const ShoppingCart = ()=>{
    


    let history = useHistory();
    const handleCancel = () => {
        history.push("/");
    }

    const data = useSelector(state => state);
    console.log(data);
    let calPrice = 0;
    for(let i = 0; i < data.length; i++){
        calPrice = data[i].price + calPrice;
    }

    let shipping = 50;
    let discount = 0;
    let tax = 0.18*calPrice;
    if (calPrice > 50) {
    shipping = 0;
}
    if(calPrice === 0) {
        shipping=discount=0;
    }
    const calTotal = ()=>{
        return(calPrice + shipping + tax - discount)
        }
    const [total,setTotal] =  useState(calTotal());


    const [couponValue, setcouponValue] = useState ("")
    const couponValChange = (event)=>{
        setcouponValue(event.target.value)
    }


    const handleCouponSubmit = (event) => {
        if(event.keyCode === 13) {
            if(couponValue === "Bootcamp2021" && calPrice > 50) {
               setTotal(calTotal() - ((10/100)*calPrice))
            }
    }
}

    return(
        <div className="cartContainer">
            <div className="cart">
                <h3>Shopping Cart</h3>
                <div>
                    {data.map(x =>  <div>
                    <div className="img"><img src = {x.img} alt = "product" /> </div>
                    <div className="desc">
                        <h4>{x.name}</h4>
                        <p>{x.description}</p>  
                        <p><strong>${x.price}</strong></p>                  
                    </div>
                    <div className="quantity">
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                </div>)}
               
              
                </div>
                
            </div>
            <div className="summary">
                <h3>Summary</h3>
                <div className="costBreak">
                    <ul>
                        <li><strong>ENTER COUPON CODE</strong></li>
                        <li>SUBTOTAL</li>
                        <li>SHIPPING</li>
                        <li>TAXES</li>
                        <li><strong>TOTAL</strong></li>
                    </ul>
                    <ul>
                        <li><input type="text" value={couponValue} onChange={couponValChange} onKeyDown ={handleCouponSubmit} /></li>
                        <li>{calPrice}</li>
                        <li>{shipping}</li>
                        <li>{tax}</li>
                        <li><strong>{total}</strong></li>
                    </ul>
                </div>
            </div>
            <div className="buttonContainer">
            <button onClick={handleCancel} className="Cancel">CANCEL</button>
            <Link to = "/Checkout/ShippingDetails"><button className="Next">NEXT</button></Link>
        </div>
        </div>
    );
}

export default ShoppingCart;