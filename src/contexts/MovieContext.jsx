import {createContext, useState, useContext, useEffect } from "react"

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

// Children is a reserved prop when you write a component and children 
// is anything that's inside of the component that you rendered
export const MovieProvider = ({children}) => {


    const[favorites, setFavorites] = useState([]);
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if(storedFavs) setFavorites(JSON.parse(storedFavs));
    }, [])

    // If anything changes in favorites, then set to the localStorage
    useEffect(() =>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

     /*
        .one oper to add
        .one to remove
        .one to check
    */
    const addToFavorites = (movie) =>{
        setFavorites(prev => [...prev,movie]);
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id == movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
};