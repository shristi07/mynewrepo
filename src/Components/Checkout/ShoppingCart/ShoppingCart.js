import React from 'react';
import './ShoppingCart.css';
import Button from '../Button/Button';

const ShoppingCart = ()=>{
    return(
        <div className="cartContainer">
            <div className="cart">
                <h3>Shopping Cart</h3>
                <div>
                <div>
                    <div className="img"></div>
                    <div className="desc">
                        <h4>PRODUCT NAME</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>  
                        <p><strong>$ 300</strong></p>                  
                    </div>
                    <div className="quantity">
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className="img"></div>
                    <div className="desc">
                        <h4>PRODUCT NAME</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>  
                        <p><strong>$ 300</strong></p>                  
                    </div>
                    <div className="quantity">
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                        </select>
                    </div>
                </div>
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
                        <li><input type="text"/></li>
                        <li>$600</li>
                        <li>FREE</li>
                        <li>$13</li>
                        <li><strong>$ 613</strong></li>
                    </ul>
                </div>
            </div>
            <Button />
        </div>
    );
}

export default ShoppingCart;