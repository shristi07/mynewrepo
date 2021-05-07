import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
    let history = useHistory();
    const length = useSelector(state => state.length)
    const handleHome = () => {
        history.push('/');
    }
    const handleClick = () => {
        history.push('/checkout')
    }
    return (
        <div className="navigationContainer">
            <div>
                <Link to="/home"><a href="#"><h1>e-Bazaar</h1></a></Link>
            </div>
            <ul className="linkContainer">
                <li className="divider" onClick={handleHome}><a className="links" href="#">Home</a></li>
                <li className="divider"><a className="links" href="#">About</a></li>
                <li className="divider"><a className="links " href="#">Shop</a></li>
                <li><a className="links" href="#">Help</a></li>
                <li><i class="fa fa-bars fa-2x" aria-hidden="true"></i></li>
                <button onClick={handleClick}><span>{length}</span><i class="fa fa-shopping-cart" aria-hidden="true"></i>Your Cart</button>
            </ul>
        </div>
    );
}

export default Navigation;