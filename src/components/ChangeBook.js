import Axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// what i did
// show the actuall values from item
// to do
// make a useEffect with put request to change the values in the database

const ChangeBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8000/books/${id}`).then((res) => {
      setBook(res.data);
    });
  }, [id]);
  return (
    <div>
      <ul>
        {book.map((item) => (
          <>
            <div className="flex justify-evenly">
              <div key={item.Book_ID} className="flex flex-col">
                <form>
                  <input
                    type="text"
                    name="Title"
                    placeholder="write a new Title"
                  />
                  <input
                    type="text"
                    name="Desc"
                    placeholder="write a new Description"
                  />
                  <input type="file" name="file" />
                </form>
              </div>
              <div className="flex flex-col">
                <ul>
                  <li key={item.Book_ID}>{item.Title}</li>
                  <li>{item.Description}</li>
                  <img
                    // path from express js static folder + picture name from database
                    src={`http://localhost:8000/uploads/${item.Cover}`}
                    alt={item.Title}
                  />
                </ul>
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ChangeBook;
