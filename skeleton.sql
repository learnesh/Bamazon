-- @author: Sarah Learner
-- @github: learnesh

-- Database Creation
CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
item_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(30),
department_name VARCHAR(30),
Price DOUBLE(10,2),
stock_quantity INTEGER);

-- Seed Items into Database
INSERT INTO Products(product_name, department_name, customer_price, stock_quantity)
VALUES 
 "perfume", "beauty", 800.00, 50,
 "iphone", "electronics", 1000, 100,
 "kindle", "books & audio", 80, 20
 "blue ray", "movies", 15, 50,
 "couch", "furniture", 2.00, 30,
 "sandals", "shoes", 8, 20,
 "sleeping bag", "outdoors", 10, 30,
"rings", "jewelry", 5, 30,
 "pillow", "home-decor", 20, 10
 "skirt", "clothing", 100, 8

-- View Database Entries
-- SELECT * FROM Products;
