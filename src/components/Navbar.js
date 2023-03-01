import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import Lang from "./Lang";
import "./Navbar.css";
function Navbar(props) {
  let { state } = props;
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="" />
      </Link>

      {state === true ? (
        <div className="nav-right">
          <Lang />
          <Link className="sign-in" to="/login">
            Sign In
          </Link>
        </div>
      ) : null}
    </div>
  );
}
export default Navbar;
