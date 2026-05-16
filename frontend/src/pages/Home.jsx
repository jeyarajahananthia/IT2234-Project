import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";

import { getBooks } from "../services/api";

function Home() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <BookForm refreshBooks={fetchBooks} />
         <SearchBar setBooks={setBooks} />

        <BookList books={books} refreshBooks={fetchBooks} />
      </div>
    </div>
  );
}

export default Home;