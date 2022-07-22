import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
