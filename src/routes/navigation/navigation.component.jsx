import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
function Navigation() {
  return (
    <Fragment>
      <div className="nav">
        <lINK className="nav-logo__container" to="/">
          <div className="nav-logo">LOGO</div>
        </lINK>
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
