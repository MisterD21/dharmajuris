import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <>
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 bg-secondary d-none d-lg-block">
                <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 className="m-0 display-4 text-primary text-uppercase">Justice</h1>
                </a>
            </div>
            <div className="col-lg-9">
                <div className="row bg-white border-bottom d-none d-lg-flex">
                    <div className="col-lg-7 text-left">
                        <div className="h-100 d-inline-flex align-items-center py-2 px-3">
                            <i className="fa fa-envelope text-primary mr-2"></i>
                            <small>yashjain@example.com</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                            <i className="fa fa-phone-alt text-primary mr-2"></i>
                            <small>+987688990</small>
                        </div>
                    </div>
                    <div className="col-lg-5 text-right">
                        <div className="d-inline-flex align-items-center p-2">
                            <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="https://youtube.com/@terminalgeeks">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary text-uppercase">Justice</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/Home" className="nav-item nav-link">Home</Link>
                            <Link to="/About" className="nav-item nav-link">About Us</Link>
                            <Link to="/PracticeArea" className="nav-item nav-link">Team</Link>
                            <Link to="/Contact" className="nav-item nav-link">Practice Area</Link>
                            <Link to="/Contact" className="nav-item nav-link">Resoures</Link>
                            <Link to="/Contact" className="nav-item nav-link">Our Clients</Link>
                            <Link to="/Contact" className="nav-item nav-link">Careers</Link>
                            <Link to="/Contact" className="nav-item nav-link">Contact Us</Link>

                           
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
  );
}

export default NavigationBar;
