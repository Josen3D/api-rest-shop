CREATE DATABASE IF NOT EXISTS shop;

USE shop;

CREATE TABLE categories(
    idcategory INT(11) NOT NULL AUTO_INCREMENT,
    description VARCHAR(150) NOT NULL,
    abbreviation VARCHAR(8) NOT NULL,
    PRIMARY KEY (idcategory)
);

CREATE TABLE products(
    code INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    iva DECIMAL(5,2) NOT NULL,
    quantity INT NOT NULL,
    unit VARCHAR(10),
    idcategory INT,
    PRIMARY KEY (code),
    FOREIGN KEY (idcategory) REFERENCES categories(idcategory)
);

CREATE TABLE sales(
    id INT(11) NOT NULL AUTO_INCREMENT,
    code INT NOT NULL,
    consecutive INT NOT NULL,
    quantity INT NOT NULL,
    unitary DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    iva DECIMAL(5,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    PRIMARY key (id),
    FOREIGN KEY (code) REFERENCES products(code),
    FOREIGN KEY (consecutive) REFERENCES ticket(consecutive)
);

CREATE TABLE tickets(
    consecutive INT NOT NULL,
    date DATETIME NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    iva DECIMAL(5,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    rfc VARCHAR(15) NOT NULL,
    idkey VARCHAR(15) NOT NULL,
    PRIMARY KEY (consecutive),
    FOREIGN KEY (rfc) REFERENCES clients(rfc),
    FOREIGN KEY (idkey) REFERENCES employees(idkey)
);

CREATE TABLE clients(
    rfc VARCHAR(15) NOT NULL,
    name VARCHAR(200) NOT NULL,
    address VARCHAR(250) NOT NULL,
    town VARCHAR(45) NOT NULL,
    township VARCHAR(45) NOT NULL,
    state VARCHAR(45) NOT NULL,
    postcode INT(5) NOT NULL,
    PRIMARY KEY (rfc)
);

CREATE TABLE employees(
    idkey VARCHAR(15) NOT NULL,
    name VARCHAR(200) NOT NULL,
    address VARCHAR(250) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    idjob INT NOT NULL,
    PRIMARY KEY (idkey),
    FOREIGN KEY (idjob) REFERENCES jobs(idjob)
);

CREATE TABLE jobs(
    idjob INT(11) NOT NULL AUTO_INCREMENT,
    description VARCHAR(20) NOT NULL,
    PRIMARY key (idjob)
);