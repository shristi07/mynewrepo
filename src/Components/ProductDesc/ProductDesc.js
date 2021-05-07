import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import "./ProductDesc.css";
import { addAction } from '../../Redux/Actions'
const ProductDescription = () => {

  const location = useLocation();
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addAction(item));
  };
  return (
    <div className="descContainer">
      <div className="product">
        <div className="preview">
          <img
            style={{ width: "100%", height: "100%" }}
            src={location.state.item.img}
            alt="product"
          />
        </div>
        <div className="description">
          <h1>{location.state.item.name}</h1>
          <p>{location.state.item.reviews} Reviews</p>
          <div className="priceSec">
            <p>
              <strong>${location.state.item.price}</strong>{" "}
            </p>
            <select name="" id="">
              {location.state.item.variety.map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
          </div>
          <p>{location.state.item.description}</p>
          <ul>
            {location.state.item.addPoints.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
          <button onClick={() => handleAdd(location.state.item)}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="reviewContainer">
        <h1>Reviews</h1>
        <div>
          {location.state.item.comments.map((item) => (
            <div className="review">
              <div className="customer">
                <img src={item.image} alt="" />
                <div className="details">
                  <h3>{item.name}</h3>
                  <p>{item.date}</p>
                </div>
              </div>
              <div>{item.review}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
