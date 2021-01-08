import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = (props) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
      {/* <div className="container"> */}
      <Link className="navbar-brand" to="/">
        <i className="fab fa-github fa-2x "></i>
      </Link>
      <span className="nav-item hide">
        <form>
          <input
            className="nav-input"
            type="text"
            name="search"
            placeholder="Search.."
          />
        </form>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => toggleNav()}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={(showNav ? "show" : "") + " collapse navbar-collapse"}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Pull Request
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Issues
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Marketplace
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Explore
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-item mr-auto d-none d-lg-inline">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <i className="fas fa-bell"></i>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbardrop"
              data-toggle="dropdown"
            >
              <i className="fas fa-plus"></i>
            </span>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/cart">
                New Repository
              </Link>
              <Link className="dropdown-item" to="/cart">
                Import repository
              </Link>
              <Link className="dropdown-item" to="/cart">
                New gist
              </Link>
              <Link className="dropdown-item" to="/cart">
                New organisation
              </Link>
              <Link className="dropdown-item" to="/cart">
                New project
              </Link>

              {/* <a className="dropdown-item" to="#">Link 3</a> */}
            </div>
          </li>
          <li className="nav-item">
            <img
              src="https://avatars1.githubusercontent.com/u/50172344?v=4"
              width="50px"
              alt="avatar"
              className="nav-link round-img"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
