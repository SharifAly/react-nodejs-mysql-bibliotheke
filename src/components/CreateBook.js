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
    <div>
      {/* encType to use fileupload */}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          // set the title state
          onChange={(e) => setTitle(e.target.value)}
          name="Title"
          placeholder="Title"
        />
        <input
          type="text"
          // set the desc state
          onChange={(e) => setDesc(e.target.value)}
          name="Description"
          placeholder="Description"
        />
        <input
          type="file"
          // set the file state
          onChange={(e) => setFile(e.target.files[0])}
          name="file"
          placeholder="Cover"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBook;
