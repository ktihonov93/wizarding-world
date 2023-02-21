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
    <Router>
      <CharacterProvider>
        <ErrorBoundary>
          <Header />
          <div className="container mt-3">
            <Routes>
              <Route path="/wizarding-world" element={<Home />} />
              <Route path="/wizarding-world/:id" element={<CharacterDetails />} />
              <Route path="/wizarding-world/login" element={<Login />} />
              <Route path="/wizarding-world/register" element={<Register />} />
              <Route path="/wizarding-world/profile" element={<Profile />} />
              <Route path="/wizarding-world/user" element={<BoardUser />} />
              <Route path="/wizarding-world/favorites" element={<FavoriteCharacterList />} />
              <Route path="/wizarding-world/history" element={<History />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </CharacterProvider>
    </Router>
  );
};
export default App;
