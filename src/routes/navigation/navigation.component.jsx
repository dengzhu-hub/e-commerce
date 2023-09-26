import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrowLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import "./navigation.style.scss";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser)
  const onSignOutHandler = async () => {
     signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="nav">
        <Link className="nav-logo__container" to="/">
          <CrowLogo className="nav-logo" />
        </Link>
        <div className="nav-link__container">
          <Link className="nav-link__to" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link__to" onClick={onSignOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link__to" to="/auth">
              Sign In
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}
export default Navigation;
