import { createContext, useContext, useState, useEffect } from 'react'

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
        if (storedFavs) setFavorites(storedFavs);
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites([...favorites, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavorites(favorites.filter((fav) => fav.id !== movieId));
    };

    const isFavorite = (movieId) => { return favorites.some((fav) => fav.id === movieId) };

    const value = { favorites, addToFavorites, removeFromFavorites, isFavorite };

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
};