import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// what i did
// show the actuall values from item
// to do
// make a useEffect with put request to change the values in the database

const ChangeBook = () => {
  // state to save the actuall data from item
  const { id } = useParams();
  const [book, setBook] = useState([]);
  // useEffect to fetch the actuall data

  useEffect(() => {
    Axios.get(`http://localhost:8000/books/${id}`).then((res) => {
      setBook(res.data);
    });
  }, [id, book]);

  // safe the new data in formData

  const formData = new FormData();

  // useNavigate to redirect to other page
  const navigate = useNavigate();

  // submit the data and change in the database

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("Title", e.target.Title.value);
    formData.append("Description", e.target.Desc.value);
    formData.append("file", e.target.file.files[0]);
    Axios.put(`http://localhost:8000/books/${id}`, formData).then((res) => {
      console.log(res);
    });
    navigate("/books");
  };
  return (
    <div>
      {book.map((item) => (
        <>
          <div className="flex justify-evenly">
            <div key={item.Book_ID} className="flex flex-col">
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-16"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Book Title
                  </label>
                  <input
                    type="text"
                    name="Title"
                    placeholder="write a new Title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Book Description
                  </label>
                  <textarea
                    type="text"
                    name="Desc"
                    placeholder="write a new Description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Upload Cover
                </label>
                <input type="file" name="file" />
                <button
                  type="submit"
                  className="mt-5 mx-1.5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded me-5"
                >
                  Update Data
                </button>
              </form>
            </div>
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
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ChangeBook;
