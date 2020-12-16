import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year,title,summary,poster,rating,genres}){
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h4 className="movie_title">{title}</h4>
                <h5 className="movie_year">{year} </h5>
                <h6 className="movie_rating"> {rating} / 10.0</h6>
                <ul className="movie_genres">
                    {genres.map((genre,index) =>(
                        <li key={index} className="genres_genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)}...</p>
            </div>
        </div>
    );
} 

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    rating:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

