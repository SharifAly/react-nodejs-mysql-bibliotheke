import React from "react";
import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

// Data from database

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
  }, []);
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
              src={`http://localhost:8000/uploads/${item.Cover}`}
              alt={item.Title}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllBooks;
