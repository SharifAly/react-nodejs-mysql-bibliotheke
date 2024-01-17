import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

// values to set the data from inputfields

const CreateBook = () => {
  const [values, setValues] = useState({
    Title: "",
    Description: "",
    Cover: "",
  });

  const navigate = useNavigate();

  // function to handle the data from inputfields
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send data to database

    Axios.post("http://localhost:8000/books", values)
      .then((res) => {
        console.log(res);
        // redirect to homepage
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // set new values on change and include the old with spread operator
          onChange={(e) => setValues({ ...values, Title: e.target.value })}
          name="Title"
          placeholder="Title"
        />
        <input
          type="text"
          // set new values on change and include the old with spread operator
          onChange={(e) =>
            setValues({ ...values, Description: e.target.value })
          }
          name="Description"
          placeholder="Description"
        />
        <input
          type="text"
          // set new values on change and include the old with spread operator
          onChange={(e) => setValues({ ...values, Cover: e.target.value })}
          name="Cover"
          placeholder="Cover"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBook;
