# Book Search Engine Application

Welcome to the Book Search Engine Application! This project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js), Apollo Server, and GraphQL. The application allows users to search for books, save their favorites, and manage their book collections.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Book Search Engine Application is designed to help users find and manage their favorite books. Users can search for books using various criteria, view detailed information about each book, and save their favorite books for future reference. The application provides a user-friendly interface and leverages modern web technologies to deliver a seamless experience.

## Features

- **Search for Books**: Search for books by title, author, genre, or other criteria using the integrated search functionality.
- **View Book Details**: View detailed information about each book, including title, author, description, and cover image.
- **Save Favorites**: Save your favorite books to your profile for easy access later.
- **Manage Saved Books**: View and manage your saved books, including deleting books from your favorites list.
- **User Authentication**: Register and log in to manage your book collection and save your preferences securely.

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and book information.
- **Express.js**: Web framework for Node.js used to build the server-side logic.
- **React**: Front-end library for building user interfaces.
- **Node.js**: JavaScript runtime used for server-side scripting.
- **Apollo Server**: GraphQL server for handling API requests.
- **GraphQL**: Query language for APIs, providing a more efficient and flexible way to interact with the server.
- **Bootstrap**: CSS framework for responsive design.

## Installation and Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/book-search-engine.git
    cd book-search-engine
    ```

2. **Install Dependencies**

    **Server**

    ```bash
    cd server
    npm install
    ```

    **Client**

    ```bash
    cd ../client
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the `server` directory and add the following environment variables:

    ```makefile
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    ```

4. **Start the Application**

    **Start the Server**

    ```bash
    cd server
    npm start
    ```

    **Start the Client**

    ```bash
    cd ../client
    npm start
    ```

## Usage

- **Home Page**: The home page provides an overview of the application and features options to search for books or view saved favorites.
- **Book Search**: Use the search functionality to find books by title, author, or other criteria. View detailed information about each book, including its title, author, description, and cover image.
- **Favorites**: Save your favorite books to your user profile for easy access. Manage and view your saved books in the favorites section.
- **Manage Saved Books**: View and delete books from your saved list.

## API Endpoints

- **Authentication**
  - `POST /api/signup`: Register a new user.
  - `POST /api/login`: Log in an existing user and receive a JWT.

- **Books**
  - `GET /api/books/search`: Search for books using query parameters.

- **User Data**
  - `GET /api/user/me`: Get the profile data of the logged-in user.
  - `DELETE /api/user/books/:bookId`: Remove a book from the user's saved list.

## Contributing

Contributions are welcome! To contribute to this project, please fork the repository, make your changes, and submit a pull request. Ensure that your changes are well-tested and adhere to the project's coding standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
