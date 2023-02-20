import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ fontFamily: "Comic Sans ms" }} >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"> NewsMonster</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navBarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
              <ul className="navbar-nav ">
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/"> Home </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business"> Business </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health"> Health </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science"> Science </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports"> Sports </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology"> Technology </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment"> Entertainment </Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
