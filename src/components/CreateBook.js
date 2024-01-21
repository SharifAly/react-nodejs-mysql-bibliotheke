import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

// values to set the data from inputfields

const CreateBook = () => {
  // safe the data from input in state
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  // useNavigate to redirect to after submit

  const navigate = useNavigate();

  // function to handle the data from inputfields
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/books";
    // create formdata
    const formData = new FormData();
    formData.append("Title", title);
    formData.append("Description", desc);
    formData.append("file", file);

    // send data to database

    Axios.post(url, formData)
      .then((res) => {
        console.log(res);
        // redirect to homepage
        navigate("/books");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* encType to use fileupload */}
      <div></div>
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
            // set the title state
            onChange={(e) => setTitle(e.target.value)}
            name="Title"
            placeholder="Title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Book Description
          </label>
          <textarea
            type="text"
            // set the desc state
            onChange={(e) => setDesc(e.target.value)}
            name="Description"
            placeholder="Description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Upload Cover
        </label>
        <input
          type="file"
          // set the file state
          onChange={(e) => setFile(e.target.files[0])}
          name="file"
          placeholder="Cover"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
        <button
          className="mt-5 mx-1.5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded me-5"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default CreateBook;
