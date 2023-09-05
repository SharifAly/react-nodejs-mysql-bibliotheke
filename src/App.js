import "./App.css";
import Axios from "axios";
import { useState } from "react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Cover, setCover] = useState("");
  const [Price, setPrice] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:4000/book/insert", {
      Title: Title,
      Description: Description,
      Cover: Cover,
      Price: Price,
    }).then(() => {
      alert("success");
    });
  };

  return (
    <div className="wrap">
      <label htmlFor="">Book Title</label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label htmlFor="">Book Description</label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <label htmlFor="">Book Cover</label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setCover(e.target.value);
        }}
      />
      <label htmlFor="">Book Price</label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button onClick={submitReview}>Submit</button>
    </div>
  );
};

export default App;
