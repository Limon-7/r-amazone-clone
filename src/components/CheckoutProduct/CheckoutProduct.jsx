import React, { useState } from "react";
import {
  ADD_TO_BASKET,
  DELETE_FROM_BASKET,
  UPDATE_BASKET__QUANTITY,
} from "../../reducers/reducer";
import { useStateValue } from "../../StateProvider";

import "./CheckoutProduct.css";
function CheckoutProduct({ checkoutProduct }) {
  const { id, image, title, price, rating, quantity } = checkoutProduct;
  const [customQuantity, setCustomQuantity] = useState(quantity);
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket-checkout-page", basket);
  // add to basket
  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  // update quantity
  const updateQuantity = (id) => {
    dispatch({
      type: UPDATE_BASKET__QUANTITY,
      payload: {
        id,
        upadteQuantity: customQuantity,
      },
    });
  };
  // delete product
  const deleteFromBasket = (id) => {
    dispatch({
      type: DELETE_FROM_BASKET,
      payload: {
        id,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="title" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p>Quantity:{quantity}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price * quantity}</strong>
        </p>
        <div className="checkoutProduct__ratings">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span key={index} role="img" aria-label="sheep">
                ⭐
              </span>
            ))}
        </div>
        <input
          className="checkoutProduct__input"
          type="number"
          value={customQuantity}
          min={1}
          max={20}
          onChange={(e) => setCustomQuantity(Number(e.target.value))}
        />
        <button
          onClick={() => updateQuantity(id)}
          className="checkoutProduct__update"
        >
          update
        </button>
        <button onClick={() => deleteFromBasket(id)}>remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
