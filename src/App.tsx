import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./Containers/Home";
import CharacterDetails from "./Components/CharacterDetails";
import FavoriteCharacterList from "./Containers/FavoriteCharacterList";
import Header from "./Containers/Header";
import Profile from "./pages/Profile";
import BoardUser from "./pages/BoardUser";
import { CharacterProvider } from "./Utils/CharacterContext";
import { History } from "./Components/History/History";
import ErrorBoundary from "./Containers/ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router basename="/wizarding-world">
      <CharacterProvider>
        <ErrorBoundary>
          <Header />
          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<CharacterDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route path="/favorites" element={<FavoriteCharacterList />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </CharacterProvider>
    </Router>
  );
};
export default App;
