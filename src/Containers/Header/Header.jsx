import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../slices/auth";
import "./Header.css";

export const Header = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/wizarding-world"} className="navbar-brand">
        Wizarding World
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/wizarding-world"} className="nav-link">
            Home
          </Link>
        </li>
      </div>
      {currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/wizarding-world/favorites"} className="nav-link">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/wizarding-world/history"} className="nav-link">
              History
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/wizarding-world/profile"} className="nav-link">
              {currentUser.username}
            </Link>
          </li>
          <li className="nav-item">
            <a href={"/wizarding-world/login"} className="nav-link" onClick={logOut}>
              LogOut
            </a>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/wizarding-world/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/wizarding-world/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
};
