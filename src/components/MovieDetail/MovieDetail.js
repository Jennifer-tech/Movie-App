import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieOrShowDetail, 
  getSelectedMovieOrShow,
removeSelectedMovieOrShow
 } from '../../features/movies/movieSlice';
import {BsStarFill} from 'react-icons/bs';
import {BsFillHandThumbsUpFill} from 'react-icons/bs';
import {RiFileList3Line} from 'react-icons/ri';
import {BsCalendar4} from 'react-icons/bs';
import "./MovieDetail.scss";
// import { objectTraps } from 'immer/dist/internal';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () =>{
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
    {Object.keys(data).length === 0 ?
      (<div>...Loading</div>)
    :(
    <>
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className='movie-rating'>
          <span>
            IMDB Rating <BsStarFill /> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <BsFillHandThumbsUpFill /> : {data.imdbVotes}
          </span>
          <span>
            Runtime <RiFileList3Line /> : {data.Runtime}
          </span>
          <span>
            Year <BsCalendar4 /> : {data.Year}
          </span>
        </div>
        <div className='movie-plot'>{data.Plot}</div>
        <div className='movie-info'>
        <div>
          <span>Director</span>
          <span>{data.Director}</span>
        </div>
        <div>
          <span>Stars</span>
          <span>{data.Actors}</span>
        </div>
        <div>
          <span>Genres</span>
          <span>{data.Genre}</span>
        </div>
        <div>
          <span>Language</span>
          <span>{data.Language}</span>
        </div>
        <div>
          <span>Awards</span>
          <span>{data.Awards}</span>
        </div>


        </div>
        
      </div>
        <div className='section-right'>
          <img src={data.Poster} alt={data.Title} />
        </div>
      
      {/* </div> */}
    </>
    )}
    </div>
  );
};

export default MovieDetail