import React from "react";
import PropTypes from "prop-types";

function Movie({id,year,title,summary,poster,rating}){
    return(
        <div>
            <h4>{title} {rating}/10.0</h4>
            <img src={poster} alt={title}/>
        </div>
    );
} 

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    rating:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
};

export default Movie;

