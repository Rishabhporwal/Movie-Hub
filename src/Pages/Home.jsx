import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../Services/api";
import MovieCard from "../Components/MovieCard";
import "./../CSS/Home.css";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const movies = await getPopularMovies();
                setMovies(movies);
            } catch (error) {
                console.log(error);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true);
        try {
            const moviesResults = await searchMovies(searchQuery);
            setMovies(moviesResults);
            setError(null);
        } catch (error) {
            console.log(error);
            setError("Failed to search movies...");
        } finally {
            setLoading(false);
        }
        setSearchQuery("");
    };

    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for movies"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (<div>Loading...</div>) : (
                <div className="movies-grid">
                    {movies.map((movie) =>
                        movie.title.toLowerCase().startsWith(searchQuery) && (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                    )}
                </div>
            )}

        </div>
    );
}

export default Home;
