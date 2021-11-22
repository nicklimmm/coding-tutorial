-- Insert values (also known as tuple or row)
-- Make sure that the data type matches
-- Insert into all columns (the number of elements must match the number of columns)
INSERT INTO $tablename
VALUES ($val1, $val2, ...);

-- Insert into specified columns (unspecified columns will have null as its value; you can rearrange the order)
INSERT INTO $tablename($col1, $col3)
VALUES ($val1, $val3);

-- Insert multiple rows in a single command
INSERT INTO $tablename
VALUES ($val1, $val2, ...), ($v1, $v2, ...);

-- NOTE: Primary key cannot be null
-- NOTE: Do not insert values to columns that are auto incremented -> will cause inconsistencies
-- TIP: To check all rows in a table, run `SELECT * FROM $tablename` to view them

-- Delete rows
DELETE FROM $tablename
WHERE <condition>; -- NOTE: if you do not specify WHERE, all rows will be deleted
-- TIP: you can join multiple conditions using AND & OR

-- Update values
UPDATE $table_name
SET $col1 = $val1, $col2 = $val2, ...
WHERE <condition>;

-- Delete all rows + reset the auto_increment
TRUNCATE $tablename;

-- Reset auto_increment
ALTER TABLE $tablename AUTO_INCREMENT = 1;

/* 
Relationships

- Many-to-many -> e.g. authors and books -> 1 author can write many books, and 1 book can be written by many authors
- One-to-many or many-to-one -> e.g. posts (one) and comments (many) -> 1 post can have many comments, but 1 comment can only be in 1 post
- One-to-one -> e.g. person and passport -> 1 person can only have 1 passport and 1 passport can only be held by 1 person
*/

-- Many-to-many
CREATE TABLE authors (
    name VARCHAR(64) PRIMARY KEY,   -- assume that name is always
    dob DATE NOT NULL
);

INSERT INTO authors
VALUES ('john', '1980-01-29'), ('bob', '1985-07-05');

CREATE TABLE books (
    name VARCHAR(64) PRIMARY KEY,
    publisher VARCHAR (64)
);

INSERT INTO books
VALUES ('Lord of the Rings', 'Diamond'), ('Harry Potter', 'Universal');

-- To handle many-to-many relationship -> create another table, where the columns are the primary keys of both tables
--                                     -> the primary key of the new table is the primary keys of both sides of the relationship

CREATE TABLE writes (
    author_name VARCHAR(64),    -- primary key of authors
    book_name VARCHAR(64),   -- primary key of books

    FOREIGN KEY (author_name) REFERENCES authors(name),
    FOREIGN KEY (book_name) REFERENCES books(name)
    ON DELETE CASCADE,

    PRIMARY KEY (author_name, book_name)
);

INSERT INTO writes
VALUES ('john', 'Lord of the Rings'), ('bob', 'Lord of the Rings');

-- Specify foreign key -> only allow insertion if the values contain in the other tables
FOREIGN KEY ($col1, $col2, ...) REFERENCES $othertablename($othercol1, $othercol2, ...)
/* 
FOREIGN KEY -> by default, we cannot delete/update the values in the 'parent' table's col if that value contains in the FK table's col
            -> if default and insist to delete/update, we must delete/update the 'child' values first, then the 'parent' values

To override, we can use:
- ON [DELETE, UPDATE] CASCADE -> ripple effect; one changes, the rest changes
- ON [DELETE, UPDATE] SET NULL -> all values are set into NULL values
*/