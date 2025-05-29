import React from 'react';
// import { Link } from 'react-router-dom'; // ✅ Correct import

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a> {/* ✅ Fixed */}
            </li>
            
          </ul>

          {/* Theme Color Picker */}
          <div className="d-flex me-3">
            <div className="bg-primary rounded mx-1"
              onClick={() => props.applyThemeColor('#042743')}
              style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-1"
              onClick={() => props.applyThemeColor('#043321')}
              style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-1"
              onClick={() => props.applyThemeColor('#3d0c0c')}
              style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-1"
              onClick={() => props.applyThemeColor('#665200')}
              style={{ height: '20px', width: '20px', cursor: 'pointer' }}></div>
          </div>

          {/* Dark/Light Mode Toggle */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
