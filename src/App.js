import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Cover, setCover] = useState("");
  const [Price, setPrice] = useState("");

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/book/all").then((response) => {
      setBookList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:4000/book/insert", {
      Title: Title,
      Description: Description,
      Cover: Cover,
      Price: Price,
    }).then(() => {
      setBookList([...bookList, {}]);
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

      {bookList.map((val) => {
        return (
          <>
            <h1 key={val._id}>Book Title: {val.Title}</h1>
            <h1 key={val._id}>Book Description: {val.Description}</h1>
            <h1 key={val._id}>Book Cover: {val.Cover}</h1>
            <h1 key={val._id}>Book Price: {val.Price}</h1>
            <div>
              <button>Update</button>
              <button>Delete</button>
            </div>
            _____________________________________________
          </>
        );
      })}
    </div>
  );
};

export default App;
