import { React,useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { useParams,useNavigate } from 'react-router-dom';

function Searched() {
  //js part first. need api so that we can display what we need to display

  const [searchedRecipe,setSearchedRecipe] = useState([]);
  let params = useParams(); //lets us use parameter in url
  const navigate = useNavigate(); 

  //map interates through each element in the array
  //for each item, we want to return something

  //**********
  useEffect(() => {
    const getSearch = (e) => {
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + params.term) //everything after receipe is term (what person searches for)
      .then(function (respone) {
        console.log(respone.data.meals)
        setSearchedRecipe(respone.data.meals)
      })
      .catch(function (error){
        console.log(error)
      })

    }
    getSearch()
  }, [params.term])
  
  //h1 says the name of the meal
  //strCateogry: show the category of what the food belongs to
  return (
    <div>
      <header class='search-header'>{params.term}
      <button onClick={()=>navigate(-1)} class='return-button'></button>
      </header>
      <div class='searched-body'>
        <div class='searched-container'>
          {searchedRecipe.map((item) => {
            return(
              <div class='card' key={item.idMeal}>
                <div class='card-header'>
                  <img src={item.strMealThumb} alt=""></img>
                </div>

                <div class='card-body'>
                  <h1>{item.strMeal}</h1>
                  <p>Meal Category: {item.strCategory}</p>
                  <p>Meal Area: {item.strArea}</p>
                  <p>Meal Tags: {item.strTags}</p>

                  <div class='tag-container'>
                    <a class='tag' target='_blank' rel='noreferrer' href={item.strSource}>Recipe</a>
                    <a class='tag' target='_blank' rel='noreferrer' href={item.strYoutube}>Tutorial</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Searched