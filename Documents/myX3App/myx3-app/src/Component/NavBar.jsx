import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../Assets/logoImg.png";
import "../Assets/navbar.css";

function NavBar() {
  return (
    <div>
      <div className="navbar-container-bg">
        <div className="navbar-container-sm">
          <div className="navbar-logoAndText">
            <div className="navbar-logo">
              <div className="navbar-logoImg">
                <img
                  className="navbar-logo-Img"
                  src={logoImg}
                  alt="purple logo"
                />
              </div>
            </div>
            <div className="navbar-text">
              <h1 className="myxalarytext">MyXalary</h1>
            </div>
          </div>
          <div className="navbar-navigations">
            <ul className="navbar-ul">
              <Link to="/homepage" className="navbar-list">
                Home
              </Link>
              <Link to="/about-us" className="navbar-list ">
                About Us
              </Link>

              <Link to="/features" className="navbar-list">
                Features
              </Link>

              <Link to="/contact-us" className="navbar-list navs">
                Contact Us
              </Link>
              {/* <Link to="/sidebar/edit" className="navbar-list navs">
                Account
              </Link> */}
            </ul>
            <div className="navbar-btns">
              <Link to="/sign-up">
                <button className="nav-signup">Sign Up</button>
              </Link>

              <Link to="/login">
                <button className="nav-login">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
