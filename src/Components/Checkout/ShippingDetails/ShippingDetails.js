import React, { useState } from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import "./ShippingDetails.css";
import { Link, useHistory } from "react-router-dom";
import "../Button/Button.css";

const ShippingDetails = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [freeShipping, setFreeShipping] = useState(false);
  const [paidShipping, setPaidShipping] = useState(false);
  const history = useHistory();

  const handleFormInputChange = (event) => {
    var name = event.target.getAttribute("name");
    var id = event.target.getAttribute("id");
    switch (name) {
      case "firstname":
        setFname(event.target.value);
        return;
      case "lastname":
        setLname(event.target.value);
        return;
      case "address1":
        setAdd1(event.target.value);
        return;
      case "address2":
        setAdd2(event.target.value);
        return;
      case "email":
        setEmail(event.target.value);
        return;
      case "pincode":
        setZip(event.target.value);
        return;
      case "phone":
        setPhone(event.target.value);
        return;
    }
    switch (id) {
      case "freeshipping":
        setFreeShipping(!freeShipping);
        setPaidShipping(false);
        return;
      case "instant":
        setPaidShipping(!paidShipping);
        setFreeShipping(false);

        return;
      default:
        return;
    }
  };

  const handleFormSubmit = () => {
    if (
      fName === "" ||
      lName === "" ||
      add1 === "" ||
      add2 === "" ||
      email === "" ||
      zip === "" ||
      phone === ""
    ) {
      alert("Please fill in all the details correctly");
      return;
    }
    if (phone.length !== 10) {
      alert("Please fill in correct phone number");
      return;
    }
    if (freeShipping === paidShipping) {
      alert("Please select a shipping type.");
      return;
    }
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!mailformat.test(email)){
        alert("Enter correct email");
        return;
    }
    
    let shippingData = [];

    let sData = {
      fName,
      lName,
      add1,
      add2,
      email,
      zip,
      phone,
      freeShipping,
      paidShipping,
    };
    shippingData.push(sData);
    history.push("/Checkout/PaymentOption");
  };

  const handleCancel = () => {
    history.push("/Checkout/ShoppingCart");
  };

  return (
    <div className="shippingContainer">
      <div className="details">
        <h3>Shipping Details</h3>
        <div className="form">
          <div>
            <div>
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="First Name"
                value={fName}
                onChange={handleFormInputChange}
                required
              />
              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={lName}
                onChange={handleFormInputChange}
                required
              />
            </div>
            <div className="errorContainer">
            </div>
          </div>

          <div>
            <input
              required
              id="address1"
              name="address1"
              type=""
              placeholder="Address 1"
              value={add1}
              onChange={handleFormInputChange}
            />
          </div>
          <div>
            <input
              required
              id="address2"
              name="address2"
              type=""
              placeholder="Address 2"
              value={add2}
              onChange={handleFormInputChange}
            />
          </div>
          <div>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={handleFormInputChange}
            />
          </div>
          <div>
            <div>
              <input
                required
                id="pincode"
                name="pincode"
                type="number"
                placeholder="Zip/Postal Code"
                value={zip}
                onChange={handleFormInputChange}
              />
              <input
                required
                id="phone"
                name="phone"
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={handleFormInputChange}
              />
            </div>
          </div>
        </div>
        <div className="shippingOption">
          <div>
            <input
              required
              type="radio"
              id="freeshipping"
              name="shipping"
              value={freeShipping}
              onChange={handleFormInputChange}
            />
            <label for="freeShipping">
              <h5>Free Shipping</h5>Between 2-5 working days
            </label>
          </div>

          <div>
            <input
              required
              type="radio"
              id="instant"
              name="shipping"
              value={paidShipping}
              onChange={handleFormInputChange}
            />
            <label for="instant">
              <h5>Next Day Delivery- $20</h5>24 hours from Checkout
            </label>
          </div>
        </div>
      </div>
      <div>
        <OrderSummary />
      </div>
      <div className="buttonContainer">
        <button className="Cancel" onClick={handleCancel}>
          BACK
        </button>
        <button onClick={handleFormSubmit} className="Next">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ShippingDetails;
