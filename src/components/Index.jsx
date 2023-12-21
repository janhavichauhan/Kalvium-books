
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function Index() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", {
          headers: { "Authorization": "whatever-you-want" },
        });
        console.log(response);
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    }

    fetchData();
  }, []);

  const bookSearch = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Body">
      <input
        className="Search"
        type="text"
        placeholder="🔍"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <div className="Books">
        {bookSearch.map((book, id) => (
          <div className="Book" key={id}>
            <h3>{book.title}</h3>
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <div className="author">{book.authors}</div>
            <div className="ratings">✡️{book.averageRating} Rating</div>
            {/* <div className="description">{book.description}</div> */}
            <div className="publisher">{book.publisher}</div>
            <div className="pageCount"> No. of pages: {book.pageCount}</div>
            {/* <div className="publishedDate">{book.publishedDate}</div> */}
            {/* <div className="language"> Language:{book.language}</div> */}
            <div className="categories">Category:{book.categories}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;


