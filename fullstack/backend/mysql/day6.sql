/* 
One-to-many/Many-to-one

We should not use the same technique (create another table) as many-to-many, as it causes duplication
To handle, in the 'many' side, set the 'one' side's primary key as a foreign key
*/

-- Posts -> One side
CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    body MEDIUMTEXT,
    author VARCHAR(64) NOT NULL,
    likes INT DEFAULT 0
);

INSERT INTO posts(title, body, author)
VALUES 
('John \'s First Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus placerat commodo. In vulputate sodales risus et eleifend. Cras in euismod ipsum, faucibus fringilla purus. Donec efficitur at tortor et pharetra. Fusce nec suscipit nibh. Cras tincidunt gravida risus, eu ullamcorper augue mollis eu. Aenean ut pellentesque est. Nunc molestie turpis vitae nisl tristique pretium. Nunc accumsan aliquet neque a congue. Integer ut orci bibendum, porttitor libero ut, porttitor arcu. Donec convallis arcu id felis euismod, nec rutrum leo pulvinar. Vivamus quis quam urna. Etiam dignissim eget lacus in consectetur. Sed blandit ligula iaculis urna dapibus, nec gravida diam accumsan. Curabitur risus enim, maximus a euismod in, convallis vitae nibh.', 'John'),
('Bob \'s First Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus placerat commodo. In vulputate sodales risus et eleifend. Cras in euismod ipsum, faucibus fringilla purus. Donec efficitur at tortor et pharetra. Fusce nec suscipit nibh. Cras tincidunt gravida risus, eu ullamcorper augue mollis eu. Aenean ut pellentesque est. Nunc molestie turpis vitae nisl tristique pretium. Nunc accumsan aliquet neque a congue. Integer ut orci bibendum, porttitor libero ut, porttitor arcu. Donec convallis arcu id felis euismod, nec rutrum leo pulvinar. Vivamus quis quam urna. Etiam dignissim eget lacus in consectetur. Sed blandit ligula iaculis urna dapibus, nec gravida diam accumsan. Curabitur risus enim, maximus a euismod in, convallis vitae nibh.', 'Bob');

-- Comments -> Many side
CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    body MEDIUMTEXT,
    author VARCHAR(64) NOT NULL,
    likes INT DEFAULT 0,

    -- Handling one-to-many rel
    post_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO comments(body, author, post_id)
VALUES 
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nisl malesuada, suscipit quam nec, mattis orci. Proin rutrum risus.', 'Dave', 1),
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nisl malesuada, suscipit quam nec, mattis orci. Proin rutrum risus.', 'Anthony', 1);

/* 
One-to-one

To handle, similar with one-to-many, but we need to decide on where to place the primary key of one table (think logically on which one is better)

e.g. people and driving_licenses
Note that not all people have driving license, then if we try to insert driving_licenses key to people, there would be NULL values
It would be best to insert people key to driving_licenses, as there wouldn't be any NULL values
*/

CREATE TABLE person (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL
);

INSERT INTO person(name)
VALUES ('John'), ('Doe'), ('Bob');

CREATE TABLE passport (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    -- Alpha-3 country codes -> https://www.nationsonline.org/oneworld/country_code_list.htm
    citizenship CHAR(3) NOT NULL,

    -- Apply one-to-one technique
    person_id INT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person(id)
);

INSERT INTO passport(name, citizenship, person_id)
VALUES ('John', 'USA', 1), ('Doe', 'CAN', 2), ('Bob', 'FRA', 3);

-- Query

-- General Syntax
SELECT <columns>    -- SELECT clause
FROM <tables>   -- FROM clause
WHERE <condition>;   -- WHERE clause

-- Query all contents on all columns
SELECT *    -- * means all columns
FROM $tablename;

SELECT * 
FROM passport;

-- Query all contents on specific columns
SELECT $col1, $col2, ...
FROM $tablename;

SELECT name, citizenship
FROM passport;

-- Query based on certain conditions
-- NOTE: How it works -> Do FROM first, then WHERE, finally SELECT
-- TIP: If we want to check if a value the nullity, use IS NULL or IS NOT NULL
SELECT <cols>
FROM <tables>
WHERE <condition>;

SELECT name, citizenship
FROM passport
WHERE citizenship='FRA';

-- Count number of rows
SELECT COUNT(*)
FROM <tables>;

SELECT COUNT(*)
FROM passport;