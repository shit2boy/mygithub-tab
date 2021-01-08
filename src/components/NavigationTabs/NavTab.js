import React from "react";

import Nav from "react-bootstrap/Nav";
import "./Navtab.css";

const NavTab = ({ user }) => {
  return (
    <div className="p-3 mt-2 tab">
      <Nav
        className="justify-content-start tab-container offset-3"
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link className="tab-item" eventKey="link-1">
            {" "}
            <i className="fas fa-book-open" style={{ color: "#ddd" }}></i>{" "}
            Overview
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" active className="tab-item-active">
            {" "}
            <i className="fas fa-save" style={{ color: "#ddd" }}></i>{" "}
            Repositories{" "}
            <span className="badge badge-light">{user.public_repos}</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <i className="fas fa-chart-line" style={{ color: "#ddd" }}></i>{" "}
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            {" "}
            <i className="fas fa-cube" style={{ color: "#ddd" }}></i> Packages
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavTab;
