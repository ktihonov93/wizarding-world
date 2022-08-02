import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./Containers/Home";
import CharacterDetails from "./Components/CharacterDetails";
import FavoriteCharacterList from "./Containers/FavoriteCharacterList";
import Header from "./Containers/Header";
import Profile from "./pages/Profile";
import BoardUser from "./pages/BoardUser";
import EventBus from "./common/EventBus";
import { CharacterProvider } from "./Utils/CharacterContext";
import ErrorBoundary from "./Containers/ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  /*
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
        <ErrorBoundary>
            <Header />
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
        </ErrorBoundary>
      </CharacterProvider>
    </Router>
  );
};
export default App;
