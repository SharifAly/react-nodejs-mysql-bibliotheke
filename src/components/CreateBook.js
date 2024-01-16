import React, { useState } from "react";
import Axios from "axios";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("http://localhost:8000/books", {
        title,
        description,
        cover,
      });

      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error(error); // Handle any errors that occur during the request
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          placeholder="Cover"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBook;
