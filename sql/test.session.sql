-- @block
DROP TABLE Users;

CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
)

-- @block
INSERT INTO Users(name, email, password)
VALUES
    ('John Doe', 'jd123@gmail.com', 'johndoe123'),
    ('Jane Smith', 'js456@gmail.com', 'janesmith456');


-- @block
SELECT * FROM Users;