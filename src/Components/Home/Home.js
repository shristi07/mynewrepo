import React from "react";
import "./Home.css";

const Home = () => {
  let product = [
    {
      name: "Product Name",
      price: " $ 100",
    },
    {
      name: "Product Name",
      price: " $ 100",
    },
    {
      name: "Product Name",
      price: " $ 100",
    },
    {
      name: "Product Name",
      price: " $ 100",
    },
    {
      name: "Product Name",
      price: " $ 100",
    },
    {
      name: "Product Name",
      price: " $ 100",
    },
  ];
  return (
    <div className="homeContainer">
      <div className="tagLine">
        <h1>Abki Baar e-Bazaar</h1>
        <p>Get the Best of Price here at e-Bazaar. Shop Your Way ! </p>
        <input type="text" placeholder="Search..." />
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
        {product.map(item => <div className="item">
            <div></div>
            <div>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          </div> )}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
