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
  }, [bookList]);

  useEffect(() => {
    fetchBookData(); // Fetch book data when the component mounts
  }, []);

  const fetchBookData = () => {
    Axios.get("http://localhost:4000/book/all").then((response) => {
      setBookList(response.data);
    });
  };

  const deleteBook = (id) => {
    Axios.delete(`http://localhost:4000/book/delete/${id}`)
      .then(() => {
        // Book deleted successfully, fetch updated data
        fetchBookData();
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  const submitReview = () => {
    Axios.post("http://localhost:4000/book/insert", {
      Title: Title,
      Description: Description,
      Cover: Cover,
      Price: Price,
    }).then(() => {
      // Clear the input fields after submission
      setTitle("");
      setDescription("");
      setCover("");
      setPrice("");

      // Fetch the updated data from the server and update the state
      Axios.get("http://localhost:4000/book/all").then((response) => {
        setBookList(response.data);
      });
    });
  };

  return (
    <div className="wrap">
      <label htmlFor="">Book Title</label>
      <input
        type="text"
        name=""
        id=""
        // value={submitReview ? ""}
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
          <div key={val.Book_ID}>
            <h1>ID: {val.Book_ID}</h1>
            <h1>Book Title: {val.Title}</h1>
            <h1>Book Description: {val.Description}</h1>
            <h1>Book Cover: {val.Cover}</h1>
            <h1>Book Price: {val.Price}</h1>
            <div>
              <button>Update</button>
              <button onClick={() => deleteBook(val.Book_ID)}>Delete</button>
            </div>
            _____________________________________________
          </div>
        );
      })}
    </div>
  );
};

export default App;
