import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
 return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar2">Links</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://www.linkedin.com/in/ebrahim-shakoor-b99aab105/">linkedin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/ebrahim246">Github</a>
          </li>
          <li class="nav-item">
            
          </li>
          <li class="nav-item">
            
          </li>
        </ul>
      </div>
    </div>
  </nav>  
 );   
}
export default Footer;