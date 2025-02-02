import { Link } from "react-router-dom";
import "./../CSS/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand" href="#">
                <Link to="/">Movie Hub</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/favorites" className="navbar-link">Favorites</Link>
            </div>
        </nav >
    );
}

export default NavBar;