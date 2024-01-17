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
          <>
            <li className="text-3xl font-bold" key={item.Book_ID}>
              {item.Book_ID}
            </li>
            <li className="text-3xl font-bold">{item.Title}</li>
            <li className="text-3xl font-bold">{item.Description}</li>
            <img src={item.Cover} alt="" />
          </>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllBooks;
