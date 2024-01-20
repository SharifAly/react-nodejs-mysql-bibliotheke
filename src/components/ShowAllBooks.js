import React from "react";
import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

// set the data from database to state

const ShowAllBooks = () => {
  const [books, setBooks] = useState([]);

  // send the get request to get data from database

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:8000/books");
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [books]);

  // delete function

  const handleDelete = (id) => {
    // fetch(`http://localhost:8000/books/${id}`, {
    //   method: "DELETE",
    // })
    Axios.delete(`http://localhost:8000/books/${id}`)
      .then((res) => console.log(res))
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <ul>
        {/* render the data from database */}
        {books.map((item) => (
          <div key={item.Book_ID}>
            <li className="text-3xl font-bold">{item.Book_ID}</li>
            <li className="text-3xl font-bold">{item.Title}</li>
            <li className="text-3xl font-bold">{item.Description}</li>
            <img
              // path from express js static folder + picture name from database
              src={`http://localhost:8000/uploads/${item.Cover}`}
              alt={item.Title}
            />
            <button onClick={() => handleDelete(item.Book_ID)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllBooks;
