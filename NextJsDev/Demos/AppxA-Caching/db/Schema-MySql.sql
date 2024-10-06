CREATE SCHEMA myschema;

CREATE TABLE myschema.employees (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    salary DOUBLE NOT NULL,
    region VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

USE myschema;

INSERT INTO myschema.employees (name, salary, region) VALUES
    ('Andy',   25000.00, 'South Wales'),
    ('Jayne',  37000.00, 'South Wales'),
    ('Tom',    47000.00, 'London'),
    ('Emily',  42000.00, 'N Ireland'),
    ('Andrew', 72000.00, 'Scotland');