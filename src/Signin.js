import { Link } from "react-router-dom";
import Lang from "./components/Lang";
import Navbar from "./components/Navbar";
import "./Signin.css";
function Signin() {
  return (
    <div className="login-page">
      <Navbar state={false} />
      <div className="login-inputs">
        <div className="form">
          <h2>Sign In</h2>
          <input
            className="input"
            type="text"
            placeholder="Email or phone number"
          />
          <input className="input" type="password" placeholder="Password" />
          <input className="input" type="submit" value="Sign In" />
          <div className="rm-nh">
            <div className="check-box">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <a href="/#">Need help?</a>
          </div>
        </div>
        <div className="text">
          <div className="new">
            <span>
              New to Netflix? <Link to="/">Sign up now</Link>
            </span>
          </div>
          <div className="learn-more">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="/#">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container ">
          <div className="row me-5 ms-5 pt-4 pb-4">
            <a href="/#">Questions? Contact us.</a>
            <div className="col-lg-3 col-md-6 col-12 ">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="/#">FAQ</a>
                  </li>
                  <li>
                    <a href="/#">Cookie Preferences</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="/#">Help Center</a>
                  </li>
                  <li>
                    <a href="/#">Corporate Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="/#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="/#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Lang />
        </div>
      </div>
    </div>
  );
}
export default Signin;
