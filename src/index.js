import './components/nav-bar.js'
import './components/meals-grid.js'
import './components/meal-detail.js'
import './components/item-recommend.js'
import './style/main.css'

import navbarHandler from './navbar-handler.js'
import mealHandler from './meal-handler.js'
import meals from './data/mealList-data.js'
import mealDetail from './data/mealDetail-data.js'

document.addEventListener("DOMContentLoaded", navbarHandler);

const mealsElement = document.querySelector('meals-grid');
const mealDetailElement = document.querySelector('meal-detail')
const mealRecommend = document.querySelector('item-recommend')

// mealDetailElement.meal = mealDetail;
// mealsElement.meals = meals;

mealRecommend.meal = mealDetail