CREATE DATABASE bookstore_db;

USE bookstore_db;

CREATE TABLE Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2),
    cover_url VARCHAR(255)
);

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);


-- Insert sample data
INSERT INTO Books (title, author, description, price, cover_url) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'A classic novel.', 10.99, 'https://via.placeholder.com/150'),
('1984', 'George Orwell', 'Dystopian fiction.', 8.99, 'https://via.placeholder.com/150');
