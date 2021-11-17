-- SQL (Structured Query Language) -> to modify, query databases
-- SQL databases -> table-like structure

-- Different types of SQL databases -> SQLite, MySQL, PostgreSQL, ...
-- Generally, they have similar syntaxes (like dialects in human languages)

-- Syntax:
-- SQL keywords are usually in UPPERCASE (convention)
-- Commands end with ';'
-- Case-insensitive, except string constants

-- In a computer, SQL DB can contain multiple databases
-- Database -> collection of tables

-- Checking dbs
SHOW DATABASES;
-- Create a db
CREATE DATABASE $dbname;
-- Delete a db
DROP DATABASE $dbname;
-- Focus on a db
USE $dbname;

-- Data Types:
-- INT -> integer
-- FLOAT or DOUBLE -> floating-point numbers
-- CHAR(n) -> fixed-size string (with length n)
-- VARCHAR(n) -> variable-sized string (with max length of n)
-- DATE, DATETIME, TIMESTAMP -> datetime related types 'YYYY-MM-DD hh:mm:ss'
-- BOOLEAN -> boolean values (true or false)

-- Table -> collection of data; contains rows and columns
-- To create a table, we need to specify columns, its type and properties (key, etc.)
CREATE TABLE $tablename (
    $colname1 $type1 $...properties1,
    $colname2 $type2 $...properties2,
    $colname3 $type3 $...properties3,
    ...
);

/* 
Common properties:
- PRIMARY KEY -> identifier; unique in the table; can contain multiple columns or attributes
              -> there can be only at most 1 primary key in a table 
              -> to specify multi-attr keys, use PRIMARY KEY ($attr1, $attr2, ...) in the end
- AUTO_INCREMENT -> similar like counters; the column value is incremented during insertion
- UNIQUE -> column values must be unique, but can be NULL and can be multiple of it
- NOT NULL -> column values cannot be NULL
- DEFAULT $val -> set default value to $val
*/

CREATE TABLE friends (
  first_name VARCHAR(32),
  last_name VARCHAR(32),
  PRIMARY KEY (first_name, last_name)
);

CREATE TABLE shopping (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(128),
    price DOUBLE
);

-- List all tables
SHOW TABLES;

-- Delete a table
DROP TABLE $tablename;

-- Describe table
DESCRIBE $tablename;

-- Edit table
-- Add column
ALTER TABLE shopping
ADD COLUMN mall VARCHAR(128);

-- Delete column
ALTER TABLE shopping
DROP COLUMN mall;