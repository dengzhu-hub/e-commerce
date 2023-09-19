import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrowLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const onSignOutHandler = async () => {
    await signOutUser();
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
export default Navigation;
