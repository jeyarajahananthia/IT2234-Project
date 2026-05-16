import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/books",
});

export const getBooks = () => API.get("/getallbooks");

export const addBook = (bookData) => API.post("/create", bookData);

export const updateBook = (id, bookData) =>
  API.put(`/update/${id}`, bookData);

export const deleteBook = (id) => API.delete(`/delete/${id}`);

export const searchBook = (bookName) =>
  API.get(`/search?bookName=${bookName}`);