import { deleteBook } from "../services/api";

function BookList({ books, refreshBooks, setEditingBook }) {

  const handleDelete = async (id, bookName) => {

    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${bookName}"?`
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await deleteBook(id);

      alert(`${bookName} deleted successfully`);

      refreshBooks();

    } catch (error) {

      console.log(error);

      alert("Error deleting book");
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

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>

            <button onClick={() => setEditingBook(book)}>
              Update
            </button>

            <button onClick={() => handleDelete(book._id, book.bookName)}>
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default BookList;