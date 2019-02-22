DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger varchar(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM burgers_db.burgers;

-- sets burger to eaten;
UPDATE burgers SET eaten=1 WHERE id = 2;
-- sets burger to not be eaten;
UPDATE burgers SET eaten=0 WHERE id = 2;