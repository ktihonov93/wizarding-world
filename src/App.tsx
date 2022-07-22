import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header";
import CharacterList from "./Containers/CharacterList";
import CharacterDetails from "./Components/CharacterDetails";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Routes>
      
    </Router>
  );
};
