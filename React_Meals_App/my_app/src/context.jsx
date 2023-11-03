import React, {useContext, useEffect, useState} from "react";

import axios from "axios"

const AppContext = React.createContext()

const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const getFavoritesFromLocalStorage = () => {
    let favorites = localStorage.getItem("favorites");
    if(favorites){
        favorites = JSON.parse(localStorage.getItem("favorites"));
    }
    else {
        favorites = []
    }
    return favorites
}

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

   const[showModal, setShowModal] = useState(false);
   const[selectedMeal, setSelectedMeal] = useState(null);

   const[favorites, setFavorites] = useState(getFavoritesFromLocalStorage());


    const fetchMeals = async (URL) => {
        setLoading(true)
        try {
            const {data} = await axios(URL)
            if(data.meals) {
                setMeals(data.meals)
            }
            else {
                setMeals([]);
            }
            
        }
        catch(error) {
            console.log(error.response);
        }
        setLoading(false);
    }

    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl)
    }
 
    const selectMeal = (idMeal, favouriteMeal) => {
        let meal;
        if(favouriteMeal){
            meal = favorites.find((meal) => meal.idMeal === idMeal)
        } else {
            meal = meals.find((meal) => meal.idMeal === idMeal);
        }
        setSelectedMeal(meal);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const addToFavorites = (idMeal) => {       
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal)
        if(alreadyFavorite) return;
        const meal = meals.find((meal) => meal.idMeal === idMeal);
        const updatedFavorites = [...favorites, meal];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
        
    }

    const deleteFromFavorites = (idMeal) => {
        const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }

    // USE EFFECT

    useEffect(() => {
        fetchMeals(allMealsUrl);
    },[])

    useEffect(() => {
        if(!searchTerm) return;
        fetchMeals(`${allMealsUrl}${searchTerm}`)   
     },[searchTerm]) 


    return (
        <AppContext.Provider value = {{meals, loading, setSearchTerm, fetchRandomMeal, showModal, selectedMeal, selectMeal, closeModal, addToFavorites, deleteFromFavorites, favorites}}>
            {children}
        </AppContext.Provider> 
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}


export {
    AppContext,
    AppProvider,
}


