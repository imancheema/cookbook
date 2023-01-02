import React, { useState } from 'react';
import '../App.css';
import {useNavigate } from 'react-router-dom';

function Landing() {
  const [recipe,setRecipe] = useState(""); //for setRecipe, when text inputted in search box, set recipe to that value
                                           //recipe is term tp use in the HTTP request
  const navigate = useNavigate(); //navigate different urls

  const submitForm = (event) => {
    event.preventDefault();
    navigate('/recipe/' + recipe);
  }

  //when clicking the  submit button, call the submitForm function.
  //This navigates to /recipe/search-term
  
  //everything in return is rendered to the screen. everything above is js
  return (
    <div class='landing-body'>
      <div class='centered'>
        <h1>cookbook 📖</h1>
        <h2>Find new and creative ways to use up ingredients and discover new dishes to try✨</h2>
        <form> 
          <input onChange={(event) => {setRecipe(event.target.value)}}class = 'search-input' type='search' placeholder='Enter an ingredient'></input> 
          <button onClick={submitForm} class='submit-btn' type='submit'>search</button> 
        </form>
      </div>
    </div>
  )
}

export default Landing
