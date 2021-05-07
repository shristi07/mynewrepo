import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Home.css";
import {productFeed} from "../ProductFeed"
import { useDispatch } from "react-redux";
import {addAction} from '../../Redux/Actions'

const Home = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addAction(item));
};

  const [product, setProduct] = useState(productFeed);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }
 
  const handleSubmit = (event) => {
    if(event.keyCode == 13)
   { 
    let  x = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
    console.log(x);
    let result = product.filter(item => {
      return item.name == x;
    })
    setProduct(result);}
  }

  useEffect(()=>{
    setProduct(productFeed);
  },[])

  const handleItemClick = (item) => {
    history.push({
      pathname: '/productDescription',
      state: {  
        item
      },
    }); 
  }

  
  return (
    <div className="homeContainer">
      <div className="tagLine">
        <div>
          <h1>Abki Baar e-Bazaar</h1>
          <p>Get the Best of Price here at e-Bazaar. Shop Your Way ! </p>
          <input type="text" placeholder="Search..." onChange={handleChange} value={searchValue} onKeyDown={handleSubmit} />
        </div>
      </div>
      <div className="productContainer">
        <div>
          <h1>Product Listing</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
            aspernatur voluptatem sit corrupti repellendus animi. Ullam aut
            autem voluptatum assumenda?
          </p>
        </div>
        
        <div className="productList">
        {product.map(item => 
        <div className="item" >
            <div>
              <img src={item.img} onClick = {() => handleItemClick(item)}></img>
              <div className="addCart" onClick={() => handleAdd(item)} >Add to Cart</div>
              </div>
            <div>
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
          </div> )}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
