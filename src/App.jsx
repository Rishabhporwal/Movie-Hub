import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorites";
import { MovieProvider } from "./Contexts/MovieContext";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
      </MovieProvider>

    </div>
  );
}
export default App;
