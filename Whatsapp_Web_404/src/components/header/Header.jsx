import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import 'font-awesome/css/font-awesome.min.css';

import "./header.css";

// Import Images
import WhatsappLogo from "../../images/Whatsapp_logo.png";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <a className="navbar-brand" href="/">
                <img src={WhatsappLogo} className="header_main_logo" draggable="false" alt="logo" />
              </a>
            </div>
            <div className="col-lg-8">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-between">
                  <li className="nav-item dropdown">
                    <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <h6>Features</h6>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/">Message privately</a></li>
                      <li><a className="dropdown-item" href="/">Stay connected</a></li>
                      <li><a className="dropdown-item" href="/">Build community</a></li>
                      <li><a className="dropdown-item" href="/">Express yourself</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="/">WhatsApp business</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/"><h6>Privacy</h6></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/"><h6>Help Center</h6></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/"><h6>Blog</h6></a>
                  </li>
                </ul>
                <div className="d-flex w-100 align-items-baseline justify-content-evenly">
                  <h6>WhatsApp Web</h6>
                  <button className="btn btn-success btn-whatsapp-download" type="button">Download <svg style={{padding:"0px 0px 2px 0px"}} width="18" height="18" viewBox="0 0 16 16" fill="none" class="_wauiIcon__download-alternative _agnt _9u4c"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 13.75C13.75 14.1642 13.4142 14.5 13 14.5L3 14.5C2.58579 14.5 2.25 14.1642 2.25 13.75C2.25 13.3358 2.58579 13 3 13L13 13C13.4142 13 13.75 13.3358 13.75 13.75Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.7487 2C8.7487 1.58579 8.41291 1.25 7.9987 1.25C7.58448 1.25 7.2487 1.58579 7.2487 2L7.2487 9.53955L3.19233 5.51449C2.89831 5.22274 2.42344 5.22458 2.13168 5.5186C1.83993 5.81263 1.84177 6.2875 2.13579 6.57925L7.46912 11.8714C7.76154 12.1616 8.23325 12.1616 8.52567 11.8714L13.859 6.57926C14.153 6.2875 14.1549 5.81263 13.8631 5.5186C13.5714 5.22458 13.0965 5.22274 12.8025 5.51449L8.7487 9.53697L8.7487 2Z" fill="currentColor"></path></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Navbar>
  );
}

export default Header;