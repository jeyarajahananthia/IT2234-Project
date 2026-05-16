import { useState } from "react";
import { searchBook } from "../services/api";

function SearchBar({ setBooks }) {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      const response = await searchBook(search);
      setBooks(response.data);
    } catch (error) {
      alert("No books found");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search book by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;