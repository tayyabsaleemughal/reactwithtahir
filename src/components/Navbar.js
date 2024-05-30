import React from 'react'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'
export default function Navbar(props={}) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-a active" aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
{         /* <Link className="nav-a " href="/about">About</Link>*/
}        </li>
      </ul>
     { /*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
  </form>*/}
 <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
</div>
    </div>
  </div>
</nav>
</div>
  )
}
//ye error handling k liye
Navbar.propTypes= {title: propTypes.string.isRequired,
                  Home:propTypes.string.isRequired}
//props  can be passed to a component props are properties
//default for not entring nave data
                  Navbar.defaultProps ={
  title:"set title here",
  Home :"Home here"
};