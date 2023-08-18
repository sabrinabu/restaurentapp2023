import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Checkout from "../../components/checkout/Checkout";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./shipping.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { saveShippingAddress } from "../../redux/shippingRedux";

export default function Shipping() {
  const shipping = useAppSelector((state) => state.shipping);

  const [fullName, setFullName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [city, setCity] = useState<string>();
  const [postalCode, setPostalCode] = useState<number>();
  const [country, setCountry] = useState<string>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler=()=>{
    dispatch(
      saveShippingAddress({ fullName:fullName, address: address, city:city, postalCode:postalCode, country:country })
    );
    if(fullName && address && city && postalCode && country){
      navigate("/payment");
    }
  }
  return (
    <div>
      <Banner />
      <Navbar />
      <div>
        <Checkout step1 />

        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Shipping Address</h1>
          </div>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              placeholder="Enter postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label />
            <button className="primary" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
