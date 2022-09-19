import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    const movieSearch= "Harry";
    const seriesSearch= "Friends";

  useEffect(() => {
  
    dispatch(fetchAsyncMovies(movieSearch));
    
    dispatch(fetchAsyncShows(seriesSearch));
}, [dispatch]);
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home