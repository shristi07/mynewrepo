import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Home.css";
import {productFeed} from "../ProductFeed"
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {addAction} from '../../Redux/Actions'

const Home = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();

  const handleAdd = (item) => {
      dispatch(addAction(item));
  };

  const [product, setProduct] = useState([
    {
      name: "Egg",
      price: " $ 10",
      img: "https://images.unsplash.com/photo-1569287649242-081fa02ce897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=170&q=80"
    },
    {
      name: "Lemon",
      price: " $ 20",
      img: "https://images.unsplash.com/photo-1501621178796-25b923c8b5de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=170&q=80"
    },
    {
      name: "Red Bell Pepper",
      price: " $ 100",
      img: "https://images.unsplash.com/photo-1614260025937-b4ecb6eb9165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=170&q=80"
    },
    {
      name: "Strawberry",
      price: " $ 100",
      img: "https://images.unsplash.com/photo-1467825487722-2a7c4cd62e75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=170&q=80"
    },
    {
      name: "Banana",
      price: " $ 100",
      img: "https://images.unsplash.com/photo-1529737902881-35c2748ca59a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=170&q=80"
    },
    {
      name: "Orange",
      price: " $ 100",
      img: "https://images.unsplash.com/photo-1598357850597-07c0ba0068e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=170&q=80"
    },
  ]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }
 
  const handleSubmit = (event) => {
    if(event.keyCode == 13)
   { let value = searchValue;
    let products = product;
    let  x = value.charAt(0).toUpperCase() + value.slice(1);
    console.log(x);
    let result = products.filter(item => {
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
        <div className="item" onClick = {() => handleItemClick(item)}>
            <div>
              <img src={item.img}></img>
              <div className="addCart"  onClick={() => handleAdd(location.state.item)} >Add to Cart</div>
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
