import MealsList from '../components/MealsList';
import {FavoritesContext} from '../store/context/favorites-context.js'
import { MEALS } from '../data/dummy-data.js';
import { useContext } from 'react';
import {MealItem} from '../components/MealItem.js';

function FavoritesScreen({navigation}){

    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))// gets the favorited Meals

    return (
        <MealsList navigation={navigation} items={favoriteMeals}></MealsList>
    )
}

export default FavoritesScreen;