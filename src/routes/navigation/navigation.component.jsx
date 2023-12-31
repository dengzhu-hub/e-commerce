import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrowLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { Nav, Logo, NavLinks, NavLink } from './navigation.style';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartIsOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';

function Navigation() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectCartIsOpen);
  console.log(currentUser);
  const signOutUser = () => {
    console.log('signOut done !');
    dispatch(signOutStart());
  };
  return (
    <Fragment>
      <Nav>
        <Logo to="/">
          <CrowLogo className="nav-logo" />
        </Logo>

        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}

          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </Nav>
      <Outlet />
    </Fragment>
  );
}
export default Navigation;
