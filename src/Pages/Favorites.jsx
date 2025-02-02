import "./../CSS/Favorites.css";
import { useMovieContext } from "../Contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorite() {

    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2 className="favorites-title">Favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2 className="favorites-empty">No Favorite Movies Yet</h2>
            <p className="favorites-empty">Start adding your favorite movies and they will appear here</p>
        </div>
    )
}

export default Favorite;