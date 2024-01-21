import React from "react";
import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  // update function

  // const handleUpdate = (id) => {
  //   Axios.put(`http://localhost:8000/books/${id}`).then((res) => {
  //     console.log(res);
  //   });
  // };

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
    <div className="w-full h-full">
      <div className="grid grid-cols-3 gap-20 my-10 mt-10">
        {/* render the data from database */}
        {books.map((item) => (
          <div
            key={item.Book_ID}
            className="flex flex-col justify-center items-center shadow-md rounded-md p-4 bg-white"
          >
            <img
              // path from express js static folder + picture name from database
              src={`http://localhost:8000/uploads/${item.Cover}`}
              alt={item.Title}
              className="w-72 rounded-md"
            />
            <table className="auto my-6">
              <thead>
                <tr>
                  <th className="text-center font-bold text-2xl">
                    {item.Title}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center text-xl w-40">
                    {item.Description}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex">
              <Link to={`/update/${item.Book_ID}`}>
                <button className="mx-1.5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ms-5">
                  Update
                </button>
              </Link>
              <button
                className="mx-1.5 bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded me-5"
                onClick={() => handleDelete(item.Book_ID)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllBooks;
