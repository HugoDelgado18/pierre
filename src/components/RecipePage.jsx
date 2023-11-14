import React from 'react';
import RecipeReviewCard from './RecipeReviewCard';
import recipes from '../testRecipes';
import './RecipePage';

function RecipePage() {
  return (
    <div>
      <h1>Recipe Page</h1>
      <p>Welcome to our restaurant!</p>
      <p>Learn our Recipes</p>
      <div className="recipes-container">
      {recipes.map((recipe, index) => {return (
        <div key={index} className="recipe-item">
        <RecipeReviewCard key={index} recipe={recipe} />
        </div>
      )})}
      </div>
    </div>
  );
}

export default RecipePage;