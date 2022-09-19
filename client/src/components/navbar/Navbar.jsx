import logo from "../../logo.png";
import React from 'react';
import "./navbar.scss";
import { ArrowDropDown, Search } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import axios from "axios";
import Table from "../Table";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [isShown, setIsShown] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleClick = e => {
    setIsShown(current => !current);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8800?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="" />
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
        <Search className="icon" onClick={handleClick} />
          {isShown && (
            <input type="search" 
            className="search" 
            placeholder="Search your movie" 
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            )}
            
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
