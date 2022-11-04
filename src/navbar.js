import { Link } from 'react-router-dom';
import './navbar.css';
import SearchBar from './SearchBar';
import './BookCard.css';

const NavBar = () => {
    return (
        <body>
            <nav>
                <div className="navbar">
                    <div className="container nav-container">
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="logo">
                            <h1><i className="fa-solid fa-burger"></i> IIT KGP Restaurants</h1>
                            <div className="btn-group dropstart">
                                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sign Up
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/sign">Owner Profile</a></li>
                                    <li><a className="dropdown-item" href="/sign">Customer Profile</a></li>
                                </ul>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sign In
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/sign">Owner Profile</a></li>
                                    <li><a className="dropdown-item" href="/sign">Customer Profile</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-items">
                            <li><Link to='/KgpRestaurants' style={{ fontSize: "20px", fontFamily: "Arial", fontWeight: "bolder" }}>Home</Link></li>
                            <li><SearchBar /></li>
                        </div>
                    </div>
                </div>
            </nav>
        </body>
    );
};

export default NavBar;