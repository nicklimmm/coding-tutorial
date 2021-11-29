-- Joins -> allows us to query rows from multiple tables
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64),
    nationality CHAR(3),
    major VARCHAR(64)
);

INSERT INTO students(name, nationality, major)
VALUES ('Alice', 'SGP', 'Business'), ('Bob', 'IDN', 'Chinese'), ('Charlie', 'GER', 'Physics'), ('Dave', 'USA', 'Engineering');

CREATE TABLE courses (
    code CHAR(6) PRIMARY KEY,
    name VARCHAR(64),
    credit INT
);

INSERT INTO courses
VALUES ('PH1000', 'Fluid Mechanics', 3), ('BU1001', 'Marketing', 4), ('CH3000', 'Chinese Settlements', 3);

CREATE TABLE enrolls (
    student_id INT,
    course_code CHAR(6),

    PRIMARY KEY(student_id, course_code),
    FOREIGN KEY(student_id) REFERENCES students(id),
    FOREIGN KEY(course_code) REFERENCES courses(code)
);

INSERT INTO enrolls
VALUES (1, 'CH3000'), (1, 'BU1001'), (3, 'PH1000'), (4, 'PH1000'), (2, 'PH1000'), (2, 'CH3000');

-- Query: Get all the names of the students who enrolled in the course 'Fluid Mechanics'
SELECT students.name
FROM enrolls, courses, students
WHERE enrolls.course_code = courses.code AND courses.name = 'Fluid Mechanics' AND enrolls.student_id = students.id;

-- NOTE: If there contains ambiguous column names, prefix the column names with <tablename>.<col_name>
-- TIP: In joins, do not forget to 'connect' the matching columns in between multiple tables

-- Practice SQL in Hackerrank