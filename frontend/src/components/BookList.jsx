import { deleteBook } from "../services/api";

function BookList({ books, refreshBooks }) {
  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      alert("Book Deleted");
      refreshBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="book-container">
      {books.map((book) => (
        <div className="book-card" key={book._id}>
          <h3>{book.bookName}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Price:</strong> Rs. {book.price}</p>
          <p><strong>Condition:</strong> {book.condition}</p>
          <p><strong>Owner:</strong> {book.ownerName}</p>
          <p><strong>Email:</strong> {book.contactEmail}</p>

          <button onClick={() => handleDelete(book._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;