import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "../SubTotal/SubTotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="banner-ad"
          className="checkout__ad"
        />
        <div>
          <h1 className="checkout__title">your shopping basket</h1>
          {basket.length ? (
            basket.map((item, index) => (
              <CheckoutProduct key={item.id} checkoutProduct={item} />
            ))
          ) : (
            <h1>Cart is empty</h1>
          )}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
