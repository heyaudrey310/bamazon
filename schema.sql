DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

use bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(50) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3402, "IPhone X", "Electronics", 999, 772);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2151, "Amazon Fire Stick", "Electronics", 49.99, 1035);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 1765, "Echo Dot", "Electronics", 49.99, 2043);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3597, "Fujifilm Instant Film", "Camera", 34.99, 5498);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9873, "Playstation Gift Card", "Video Games", 25, 1098);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5982, "Becoming", "Books", 14.99, 542);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9231, "XBox Wireless Controller", "Video Games", 89.95, 203);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1203, "Rayban Sunglasses", "Fashion", 99.99, 987);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1145, "Women's Summer Dress", "Fashion", 19.99, 7889);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1478, "Crocs Men's Shoes", "Fashion", 30.99, 241);

SELECT * FROM products;





 