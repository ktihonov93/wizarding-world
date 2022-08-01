import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./Containers/Home";
import CharacterDetails from "./Components/CharacterDetails";
import FavoriteCharacterList from "./Containers/FavoriteCharacterList";
import Profile from "./pages/Profile";
import BoardUser from "./pages/BoardUser";
import { logout } from "./slices/auth";
import EventBus from "./common/EventBus";
import { CharacterProvider } from "./Utils/CharacterContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  /*
  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });
    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);
*/
  return (
    <Router>
      <CharacterProvider>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Wizarding World
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>
            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/favorites"} className="nav-link">
                    favorites
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
          <div className="container mt-3">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/:id" element={<CharacterDetails />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route
                exact
                path="/favorites"
                element={<FavoriteCharacterList />}
              />
            </Routes>
          </div>
        </div>
      </CharacterProvider>
    </Router>
  );
};
export default App;

//старый вариант страницы без регистрации на всякий случай
/*import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header";
import Home from "./Containers/Home";
import CharacterDetails from "./Components/CharacterDetails";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
};
*/
