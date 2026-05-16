import { useState } from "react";
import { addBook } from "../services/api";

function BookForm({ refreshBooks }) {
  const [book, setBook] = useState({
    bookName: "",
    author: "",
    price: "",
    condition: "",
    ownerName: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addBook(book);

      alert("Book Added Successfully");

      setBook({
        bookName: "",
        author: "",
        price: "",
        condition: "",
        ownerName: "",
        contactEmail: "",
      });

      refreshBooks();
    } catch (error) {
      console.log(error);
      alert("Error adding book");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="bookName"
        placeholder="Book Name"
        value={book.bookName}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={book.price}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="condition"
        placeholder="Condition"
        value={book.condition}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="ownerName"
        placeholder="Owner Name"
        value={book.ownerName}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="contactEmail"
        placeholder="Contact Email"
        value={book.contactEmail}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;