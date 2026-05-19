# IT2234-Project

Project Title:
    University students book exchange system

Problem Description: 
        Many students and book readers have books they no longer use, while others struggle to find affordable second-hand books. Existing platforms are often complicated, expensive, or not focused on local student communities. There is a need for a simple web application where users can list, update, and manage books for exchange or resale easily.

Proposed Solution:
        The Book Exchange Platform is a MERN stack web application that allows users to manage second-hand book listings efficiently. Users can add books with details such as title, author, condition, and price, view all available books, update existing listings, and delete books when they are no longer available.The system provides a user-friendly interface connected to a backend API and MongoDB database for storing book information.

Features:
        Register new user
        login user
        Add new book listings
        View all available books
        Update existing book details
        Delete book listings
        Search Book with book name
        Store book data in MongoDB
        RESTful API integration
        Responsive user interface using React

Technologies used:
        Frontend
            React.js
            Axios
            CSS 
        Backend
            Node.js
            Express.js
        Database
            MongoDB
            Mongoose
        Tools & Platforms
            Visual Studio Code
            Postman
            Git & GitHub

Api EndPoints:
        Register User: 
            POST /api/users/register

            Request: http://localhost:8000/api/users/register
            Request body:
                {
                    "name" : "Ananthia",
                    "email" : "ana123@gmail.com",
                    "password" : "123456"
                }
            Response:
                {
                    "message": "User registered successfully",
                     "user": {
                         "name": "Sineha",
                         "email": "sineha2003@gmail.com",
                         "password": "$2b$10$0qFMbgMRmzE0jSFmLrPq5.hkysNpx1xfJ1ZxF6Z2jtQJj0FjQKDX.",
                         "_id": "6a0c70d24759a3e76c329064",
                         "__v": 0
                            }
                }

        Login: 
            Request:http://localhost:8000/api/users/login
            Headers=>
            Authentication : "long token"

            Response:
                {
                    "message": "Login successful",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMGM3MGQyNDc1OWEzZTc2YzMyOTA2NCIsImlhdCI6MTc3OTIwMDMxNCwiZXhwIjoxNzc5Mjg2NzE0fQ.t4BXbeQpxQqRmhL3sAue7TSasWO4IGCV0HywjFx9Y5c",
                    "user": {
                            "id": "6a0c70d24759a3e76c329064",
                             "name": "Sineha",
                             "email": "sineha2003@gmail.com"
                         }
                }


        View Book:
            GET /api/Books/getallbooks

            Request : http://localhost:8000/api/Books/getallbooks
            Response: 
            [
                {
                     "_id": "664f123abc456",
                     "bookName": "Database Systems",
                     "author": "Thomas Connolly",
                     "price": 2500,
                     "condition": "Used",
                     "ownerName": "John",
                     "contactEmail": "john@gmail.com"
                }
            ]

        Add Book:
            POST /api/Books/create

            Request: 
                {
                    "bookName": "React Basics",
                    "author": "Jordan Walke",
                    "price": 3000,
                    "condition": "New",
                    "ownerName": "Alice",
                    "contactEmail": "alice@gmail.com"
                }

            Response: 
                {
                    "message": "Book added successfully"
                }

        Update Book:
            PUT /api/Books/update/:id

            Request: http://localhost:8000/api/Books/update/664f123abc456
            Request body: 
                {
                    "bookName": "React Basics",
                    "author": "Jordan Walke",
                    "price": 1500,
                    "condition": "used",
                    "ownerName": "Alice",
                    "contactEmail": "alice@gmail.com"
                }
            
            Response:
                {
                   "message": "Book updated successfully"
                }

        Delete Book:
            DELETE /api/Books/delete/:id

            Request : http://localhost:8000/api/Books/delete/664f123abc456

            Response: 
                    {
                        "message": "Book deleted successfully"
                    }

        Search Book: 
            GET /api/books/search?bookName=:name

            Request :  Request : http://localhost:8000/api/Books/search?bookName=Statistical Inferance

            Response: 
                {
                     "_id": "664f123abc456",
                     "bookName": "Statistical Inferance",
                     "author": "Thomas Connolly",
                     "price": 2500,
                     "condition": "Used",
                     "ownerName": "John",
                     "contactEmail": "john@gmail.com"
                }


Setup Instruction:
        Make sure the following are installed on your computer:
            Node.js
            MongoDB
            Git
            Visual Studio Code

How torun the project:
        Create .env File and add this details
            PORT=8000
            MONGO_URI=your_mongodb_connection_string


