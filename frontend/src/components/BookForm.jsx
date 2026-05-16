import { useEffect, useState } from "react";

import { addBook, updateBook } from "../services/api";

function BookForm({ refreshBooks, editingBook, setEditingBook }) {

  const [book, setBook] = useState({
    bookName: "",
    author: "",
    price: "",
    condition: "",
    ownerName: "",
    contactEmail: "",
  });

  useEffect(() => {

    if (editingBook) {
      setBook(editingBook);
    }

  }, [editingBook]);

  const handleChange = (e) => {

    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editingBook) {

        await updateBook(editingBook._id, book);

        alert("Book Updated Successfully");

        setEditingBook(null);

      } else {

        await addBook(book);

        alert("Book Added Successfully");
      }

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

      alert("Error");
    }
  };

  return (

    <form className="form" onSubmit={handleSubmit}>

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

      <button type="submit">

        {editingBook ? "Update Book" : "Add Book"}

      </button>

    </form>
  );
}

export default BookForm;