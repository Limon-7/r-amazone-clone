import React from "react";
import CurrencyFormat from "react-currency-format";
import { getSubTotal } from "../../reducers/reducer";
import { useStateValue } from "../../StateProvider";
import "./SubTotal.css";
function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(getSubTotal(basket));
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getSubTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
