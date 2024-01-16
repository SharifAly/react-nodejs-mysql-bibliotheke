import "./App.css";
import ShowAllBooks from "./components/ShowAllBooks";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CreateBook from "./components/CreateBook";
import ChangeBook from "./components/ChangeBook";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/update" element={<ChangeBook />} />
        <Route path="/books" element={<ShowAllBooks />} />
      </Routes>
    </>
  );
};

export default App;
