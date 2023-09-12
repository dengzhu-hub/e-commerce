import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrowLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
function Navigation() {
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
export default Navigation;
