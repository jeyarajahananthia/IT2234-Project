import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/books",
});

// Function to get token from localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// ======================
// PUBLIC ROUTES
// ======================

// Get all books
export const getBooks = () => {
  return API.get("/getallbooks");
};

// Search books
export const searchBook = (bookName) => {
  return API.get(`/search?bookName=${bookName}`);
};

// ======================
// PROTECTED ROUTES
// ======================

// Add book
export const addBook = (bookData) => {
  return API.post(
    "/create",
    bookData,
    {
      headers: {
        Authorization: getToken(),
      },
    }
  );
};

// Update book
export const updateBook = (id, bookData) => {
  return API.put(
    `/update/${id}`,
    bookData,
    {
      headers: {
        Authorization: getToken(),
      },
    }
  );
};

// Delete book
export const deleteBook = (id) => {
  return API.delete(
    `/delete/${id}`,
    {
      headers: {
        Authorization: getToken(),
      },
    }
  );
};