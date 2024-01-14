import "./App.css";
import ShowAllBooks from "./components/ShowAllBooks";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        {/* <ShowAllBooks /> */}
        <Route path="/books" element={<ShowAllBooks />} />
      </Routes>
    </>
  );
};

export default App;
