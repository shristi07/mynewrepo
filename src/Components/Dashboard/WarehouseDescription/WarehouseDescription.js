import React from "react";
import { useLocation } from "react-router";
import "./WarehouseDescription.css";
import heartIcon from "../../../assets/heart.png";
import brokenHeartIcon from "../../../assets/broken-heart.png";
import registered from "../../../assets/customer-service.png";
import notregistered from "../../../assets/no.png";
const WarehouseDescription = () => {
  const location = useLocation();
  const {name, code, is_live, is_registered, type, space_available, img, city,cluster} = location.state.item;
  return (
    <div className="descContainer">
      <div className="product">
        <div className="preview">
          <img
            style={{ width: "100%", height: "100%" }}
            src={img}
            alt="product"
          />
        </div>
        <div className="description">
          <h1>{name}</h1>
          <p className="equi-spaced"><span>Code</span> <span>{code}</span></p>
          <div >
            <p className="equi-spaced">
              <strong>
                {is_live ? "Live" : "Not Live"}
              </strong>
              <img style={{width:"8%"}} src={is_live ? heartIcon : brokenHeartIcon} />
            </p>
            <p className="equi-spaced">
              <strong>
                {is_registered
                  ? "Registered"
                  : "Not Registered"}
              </strong>
              <img src={is_registered ? registered : notregistered} />
            </p>
          </div>
          <div className="detail-box" >
            <div>
              <p>Type</p>
              <p>Space Available</p>
              <p>City</p>
              <p>Cluster</p>
            </div>
            <div>
              <p>{type}</p>
              <p>{space_available}</p>
              <p>{city}</p>
              <p>{cluster}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDescription;

