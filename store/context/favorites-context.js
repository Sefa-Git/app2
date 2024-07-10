import {createContext, useState, useEffect} from 'react';



export const FavoritesContext = createContext({
    ids:[],
    adddFavorite: ()=> {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({children}){

     const [favoriteMealIds,setFavoriteMealIds] = useState([]);

    useEffect(() => {
   
    }, [FavoritesContext.ids]);

     function addFavorite(id){
        setFavoriteMealIds((currentFavIds)=>[...currentFavIds, id]);
     }

     function removeFavorite(id){
        setFavoriteMealIds((currentFavIds)=>[currentFavIds.filter((mealId) => mealId!== id )]);
        console.log(`remaining favs : ${favoriteMealIds}`);
     }

     const value = {
        ids:  favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
     }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
export default FavoritesContextProvider;