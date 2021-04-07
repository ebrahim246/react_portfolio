import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {

 // update this too be your actual header
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01"></div>
            <a class="navbar-brand" href="#">Ebrahim Shakoor</a>
           
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
                
              <li className="nav-item">
                  <NavLink to="/Contact" className="nav-link" activeClassName="active">Contact</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
              </li>
           
              <li class="nav-item">
               
              </li>
              <li class="nav-item">
                
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        
      </nav>
  );
}

export default Header;
