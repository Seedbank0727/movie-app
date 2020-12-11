import React from "react";
import PropTypes from "prop-types";
import "./style.css";


const FoodILike = [
  {
    id:1,
    name : "Kamjatang",
    image:
    "https://homecuisine.co.kr/files/attach/images/140/990/086/3555cb39cb6066ed9c092d1b77975719.JPG",
    rating:5.0
  },
  {
    id:2,
    name : "Galbi",
    image:
    "http://mlb26.cafe24.com/img/galbi/la_galbi_gui.png",
    rating:5.0
  },
  {
    id:3,
    name:"KimchiJJim",
    image:
    "https://recipe1.ezmember.co.kr/cache/recipe/2017/11/21/8cb4b9f30e3570f4ff93dd3303eeff7f1.jpg",
    rating:5.0
  }
];

function Food({name,picture,rating}){
  return(
    <div>
      <h2>I like {name}!</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
};


function App() {
  return(
    <div>
      {FoodILike.map(dish => (
        <Food 
        key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating ={dish.rating}
        className="photo"/>
        ))}
    </div>
  );
}

export default App;
