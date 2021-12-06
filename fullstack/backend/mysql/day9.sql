/* 
Aggregate Functions -> the task of collecting a set of values to return a single value
e.g. SUM(<col>), COUNT(<col>), AVG(<col>), MIN(<col>), MAX(<col>)

COUNT(*) -> counts the number of rows (including NULL values)
COUNT(<col>) -> does not include NULL values
*/

/* 
GROUP BY -> group column based on values

NOTE: the columns in the SELECT clause can only be,
1. columns that are in GROUP BY, OR
2. aggregated columns that are not in GROUP BY
*/

-- SYNTAX:
SELECT <cols>
FROM <tables>
WHERE <conds>
GROUP BY <cols>;

-- https://www.hackerrank.com/challenges/average-population-of-each-continent/problem?isFullScreen=true
SELECT COUNTRY.CONTINENT, FLOOR(AVG(CITY.POPULATION))
FROM COUNTRY, CITY
WHERE CITY.COUNTRYCODE = COUNTRY.CODE
GROUP BY COUNTRY.CONTINENT;

/* 
HAVING clause -> filter groups using conditions with aggregate function

What is the diff between WHERE and HAVING?
- HAVING uses aggregations, but WHERE does not
*/
-- SYNTAX:
SELECT <cols>
FROM <tables>
WHERE <conds>
GROUP BY <cols>
HAVING <conds w aggrs>;

SELECT COUNTRY.CONTINENT, FLOOR(AVG(CITY.POPULATION))
FROM COUNTRY, CITY
WHERE CITY.COUNTRYCODE = COUNTRY.CODE
GROUP BY COUNTRY.CONTINENT
HAVING AVG(CITY.POPULATION) < 200000;


-- SQL COMMANDS
SET GLOBAL validate_password.length=4;
SET GLOBAL validate_password.mixed_case_count=0;
SET GLOBAL validate_password.number_count=0;
SET GLOBAL validate_password.special_char_count=0;
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';

GRANT ALL PRIVILEGES ON * . * TO 'user'@'localhost';
FLUSH PRIVILEGES;