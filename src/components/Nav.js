import React from 'react'
import PropTypes from 'prop-types'
// import {Outlet,Link} from "react-router-dom";

export default function Nav(props)
{
    return(
          <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">TextUtils</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                {/* <li className="nav-item">
                  < a className="nav-link" href="/about">About us</a>
                </li> */}
              </ul>
              <div className={`form-check form-switch text-${props.mode=='light'?'dark':'light'} mx-2`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleblue}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkmode</label>
             </div>
            </div>
          </div>
        </nav>
        </>

    );
}
// Nav.PropTypes={heading:PropTypes.string}

// Nav.defaultProp={heading:'set heading'}
