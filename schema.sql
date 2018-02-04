DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INTEGER (10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (10) NOT NULL,
  stock_quantity INTEGER NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(1, 'Mascara', 'Cosmetics', 21, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(2, 'Overwatch', 'Electronics', 59.99, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(3, 'Toothbrush', 'Health and Beauty', 2.29, 1403);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(4, 'Comb', 'Health and Beauty', 5.99, 55);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(5, 'Blu-Ray Discs', 'Electonics', 16.99, 97);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(6, 'CDs', 'Electronics', 15, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(7, 'Stereo', 'Auto', 40, 58);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(8,'Oil', 'Auto', 70, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(9, 'Coffee','Food', 8.99, 46);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES(10, 'Pasta', 'Food', 2, 43);

SELECT * FROM products;