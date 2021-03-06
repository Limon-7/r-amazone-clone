import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [state, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__serchInput" />
        <SearchIcon className="header__serachIcon" />
      </div>
      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">hello limon</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/returns" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/prime" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              ( {state.basket.length} )
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
