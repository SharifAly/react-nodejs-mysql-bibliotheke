import React from "react";
import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

const ShowAllBooks = () => {
  const [books, setBooks] = useState([]);

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
