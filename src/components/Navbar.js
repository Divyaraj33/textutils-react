import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
// import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon heading"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item edit">
                                <a className="nav-link active edit" aria-current="page" href="#home">Home</a>
                            </li>
                            {/* 
                            <li className="nav-item edit">
                                <a className="nav-link edit" href="#about">{props.aboutText}</a>
                            </li>
                            <li className="nav-item edit">
                                <a className="nav-link edit" aria-current="page" href="#contact">Contact Us</a>
                            </li>
                            */}
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired,
};





// import React from 'react';
// import PropTypes from 'prop-types';
// import './Navbar.css';
// // import { Link } from 'react-router-dom'

// function Navbar(props) {
//     return (
//         <>
//             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//                 <div className="container-fluid">
//                 <a className="navbar-brand" href="#home">{props.title}</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon heading"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             {/* <button className="nav-link" style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={() => alert('Home Clicked')}>
//                                 Home
//                             </button> */}

//                             <li className="nav-item edit">
//                                 <a className="nav-link active edit" aria-current="page" href="#home">Home</a>
//                             </li>
//                             {/* <li className="nav-item edit">
//                                 <a className="nav-link edit" href="/about">{props.aboutText}</a>
//                             </li> */}
//                             {/* <li className="nav-item edit">
//                                 <a className="nav-link edit" aria-current="page" href="#contact">Contact Us</a>
//                             </li> */}
//                             {/* <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Dropdown
//                                 </a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li><a className="dropdown-item" href="/">Action</a></li>
//                                     <li><a className="dropdown-item" href="/">Another action</a></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><a className="dropdown-item" href="/">Something else here</a></li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
//                             </li> */}
//                         </ul>
//                         <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//                             <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
//                             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
//                         </div>
//                         {/* <form className="d-flex">
//                             <input className="form-control me-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-primary" type="submit">Search</button>
//                         </form> */}
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }


// import React from 'react'
// import PropTypes from 'prop-types'
// import './Navbar.css'; 
// // import { Link} from 'react-router-dom'
// function Navbar(props) {

//     return (
//         <>
//             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">{props.title}</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon heading"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item edit">
//                                 <a className="nav-link active edit"  aria-current="page" href="#">Home</a>
//                             </li>
//                             {/* <li className="nav-item edit">
//                                 <a className="nav-link edit" href="/about">{props.aboutText}</a>
//                             </li> */}
//                             {/* <li className="nav-item edit">
//                                 <a className="nav-link edit" aria-current="page" href="">Contact Us</a>
//                             </li> */}
//                             {/* <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Dropdown
//                                 </a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li><a className="dropdown-item" href="/">Action</a></li>
//                                     <li><a className="dropdown-item" href="/">Another action</a></li>
//                                     <li><hr className="dropdown-divider" /></li>
//                                     <li><a className="dropdown-item" href="/">Something else here</a></li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
//                             </li> */}
//                         </ul>
//                         <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//                             <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
//                             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
//                         </div>
//                         {/* <form className="d-flex">
//                             <input className="form-control me-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-primary" type="submit">Search</button>
//                         </form> */}
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar;

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }

