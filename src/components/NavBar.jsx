import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../ProfileContext";

export default function NavBar() {
    const { profile, setProfile } = useContext(ProfileContext)

    const handleLogout = () => {
        setProfile(null);
        localStorage.removeItem("profile");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">Atlas X Conference</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav me-auto flex-lg-row">
                    <li className="nav-item px-2">
                        <Link className="nav-link" to="/">Sessions</Link>
                    </li>
                    {(profile && profile.isAdmin) &&
                        <li className="nav-item px-2">
                            <Link className="nav-link" to="/addsession">Add Session</Link>
                        </li>
                    }
                </ul>
                <span className="d-flex flex-column flex-lg-row align-items-lg-center">
                    {profile ?
                        <>
                            <p className="text-light mb-0 px-2">Hello, {profile.username}</p>
                            <button className="btn btn-danger align-self-start mx-2" onClick={handleLogout}>Logout</button>
                        </>
                        :
                        <Link className="btn btn-success align-self-start mx-2" to="/login">Login</Link>
                    }
                </span>
            </div>
        </nav>
    )
}