import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import userAvatar from "../../images/userAvatar.jpg";
import {FaSearch} from 'react-icons/fa'
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };
  return (
    <div className="header">
    
      <div className="logo"><Link to="/">Movie App</Link></div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type="text" value={ term } placeholder="Search Movies or shows" onChange={(e) => setTerm(e.target.value)} />
          <button type='submit'><FaSearch /></button>
        </form>
      </div>
    
      
      <div className="user-image">
        <img src={userAvatar} alt="user" />
      </div>
    </div>
  )
}

export default Header