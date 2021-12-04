-- Join on the same table -> a technique for joins
CREATE TABLE counter (
    id INT PRIMARY KEY
);

INSERT INTO counter
VALUES (1), (2), (3), (4);

-- Query: Print all possible id pair combinations (id1, id2), where id1 < id2
-- Example input: counter -> 1, 2, 3, 4
-- Example output: query -> (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)

SELECT *
FROM counter c1, counter c2
WHERE c1.id < c2.id;

-- NOTE: Use table aliases when using same tables (to prevent 'confusion')

-- Another query: Find all names of students where their nationality is the same as Bob's nationality

/* 
Other join variants:
- LEFT JOIN -> returns all rows from the left-hand table and only those rows from the other table where the joined fields are equal
- RIGHT JOIN -> similar but all rows from right-hand table
- FULL JOIN -> all rows from both left and right-hand table

OUTER JOINS will give NULL values if they dont match
*/

CREATE TABLE house (
    id INT PRIMARY KEY AUTO_INCREMENT,
    location VARCHAR(64)
);

INSERT INTO house(location)
VALUES ('California'), ('Dakota'), ('Auschwitz'), ('Moskow');

CREATE TABLE house_sold (
    house_id INT PRIMARY KEY,
    price INT,

    FOREIGN KEY (house_id) REFERENCES house(id)
);

INSERT INTO house_sold
VALUES (1, 800000), (3, 750000);

-- SYNTAX
SELECT <cols>
FROM <table1>
[LEFT|RIGHT|FULL] OUTER JOIN <table2>
ON <join_cond>
WHERE <cond>;

-- QUERY: Print the locations and the price sold of all houses, set NULL for the price sold if a house is not sold yet

-- INCORRECT -> This only prints the houses that are sold
SELECT house.location, house_sold.price
FROM house, house_sold
WHERE house.id = house_sold.house_id;

-- CORRECT
SELECT house.location, house_sold.price
FROM house
LEFT JOIN house_sold
ON house.id = house_sold.house_id;

-- ALSO CORRECT
SELECT house.location, house_sold.price
FROM house_sold
RIGHT JOIN house
ON house.id = house_sold.house_id;