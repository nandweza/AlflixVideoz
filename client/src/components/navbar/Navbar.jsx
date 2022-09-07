import React from 'react';
import "./navbar.scss";
import { ArrowDropDown, Search } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <span>AlflixVideoz</span>
          <Link to="/" className='link'>
            <span>Home</span>
          </Link>
          <Link to="/series" className='link'>
            <span className='navbarmainLinks'>Series</span>
          </Link>
          <Link to="/movies" className='link'>
            <span className='navbarmainLinks'>Movies</span>
          </Link>
          <Link to="" className='link'>
            <span>New and Popular</span>
          </Link>
          <Link to="" className='link'>
            <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span>KID</span>
          <Notifications className="icon"/>
          <img src="https://avatars.githubusercontent.com/u/63627595?v=4" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
