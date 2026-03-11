/*
@SQL(Structured Query LAnguage) :- 
=> It is Domain-specific Standard Programminf Language Used to interact with relational databse like MySQL, SQL Server, PostgreSQL, Oraclkw

@phpMyAdmin : free and opensource Web based Tool Written In PHP DEsigned to MAnge MySQL and MariaDB db.

@Engines
=> Storage Engine to manage how Stored Data Stored and Accessed,
I) InnoDB : default, ACID(Atomicity, consistancy, isolation, Durability )
II) MyISAM : known for SPEED , Support FULL-text indexing, but lacck of Trnsaction suppot & uses TAble LEvel lOcking
III) CSV : store csv format in text file using comma-separated value, & esily export into spreadsheet Program
IV) MERGE : used to merge Two identical MyISAM tables
V) MEMORY : fasted engine to createtemporary tables in memory(heap), so data lost when restarts, stored in RAM, used for read-only cache


@DATA TYPE
=> char(n) : fixed Length, implies reseve(padded) space if legnth is not satisfied.
=> VARCHAR(n) : length is content specified
=> INT : occupies 4 bytes range 247483647 
=> BIGINT : large than INT occupies 8 bytes
=> DECIMAL(25, 4) : number With decimal Points. occupies 4 bytes, here 25 is INTEGER & 4 is Decimal NUmbers
=> DATE, TIME, YEAR, DATETIME, TIMESTAMP
=> BLOB (binary large object): stores complex file like image,vedio, audio,docs. 
=> TEXT, BIT, , JSON, 


@Syntax
SELECT [DISTINCT] dev.col1, count(*) AS "Emp Count", AVG(dev.salary) AS "Average-Salary"
FROM employee dev
JOIN department dept 
ON dev.department_id = dept.id
WHERE dev.salary > 50000
GROUP BY dept.name
HAVING AVG(dev.salary) > 60000
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC]
LIMIT 5 OFFSET 5;   -- LIMIT [OFFSET,]ROWCOUNT

-------------------------
-- check column is null 
SELECT column1, column2, ...
FROM table_name
WHERE column_name IS NULL;

------------------------


@SQL command
=>DDL : CREATE, DROP, ALTER, TRUNCATE 
=>DML : INSERT, UPDATE, DELETE
=>DCL : GRANT, REVOKE
=>TCL : COMMIT, ROLLBACK, SAVEPOINT
=>DQL : SELECT
ALTER TABLE tbl ADD COLUMN col_name col_defination
ALTER TABLE tbl CONSTRAINT contrsint_name constrint property;

@CONSTRAINTS
=> NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY, FOREIGN KEY(foreinCOlumn) REFRENCES mastrtbl(primaryKeyColumn)

@Opeartors
=> LOGICAL OPERATOR :  NOT, OR, AND, BETWEEN min AND max, IN(values), ANY(any one return by =, >  <), ALL, EXIST, LIKE(%:all, _:one), REGEXP "pattern(^$|[-]{})", IS NULL


@AGGREGATE
=> count(*), sum(column), AVG(column), MAX/MIN(COlUMN) ,RAND([Num]), POWER(base,exponent), 

@STRING
=> CONCAT(col1,col2,...), SUBSTRING(col FROM start FOR length )/SUBSTR(),
 CHAR_LENGTH(col)/LENGTH(col), UPPER/LOWER(col), TRIM(), REPLACE(str, oldsubstr, newsubstr), CEIL/FLOOR/ROUND(NUM), STRCMP(expr1, expr2) : 0(equal) , 1(first), -1(second) 

@DATE
=> CURRENT_DATE(), CURRENT_TIME(), DATEDIFF(date1, date2)
=> DATE_ADD/SUB("2017-06-15", INTERVAL 10 HOUR/DAY/WEEK/MONTH/MINUTE/YEAR)
=> EXTRACT(`YEAR` FROM column) : `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`, `SECOND`, `QUARTER`, `WEEK`, `DAYOFYEAR`
=> TO_CHAR(column, format), LAST_DAY(date)

@SET Operaion
=> UNION : select UNION select : colms & datatpe must besame , It eliminates Duplicate ROWS
=> UNIONALL : same as Union but it gives DUplicate rows Also
=> INTERSECT : select INERSECT select : Returns Common VAlues
=> MINUS/EXCEPT : select MINUS select : Present in first but not in second

@GROUP BY
=> Arange Idential Dat into Groups
@HAving
=> Condition Apply to AGgregate Function

@TRANSACTION
=> COMMIT : Save all changes during cuurent transaction (permanent)
=> ROLLBACK [TO SAVEPOINT dev] : undo all chnages during curren transaction or specific SAVEPOINT;
=> SAVEPOINT : set point within trnmsaction incase Rollback

-- -------------------------------------------------------------------
@Employee Table
CREATE TABLE employee(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    name VARCHAR(20),
    email VARCHAR(30) UNIQUE not null,
    salary int(7) default 0,
    department_id int(3),
    city varchar(15) check (city IN ("Chikhli", "Navsari", "Ahmedabad", "Valsad", "Anand") ),
    joining_date DATE DEFAULT (current_date)
) COMMENT 'Employee Table Created By Dev';

@Department TAble


@INdexes
=> used to Enhance the speed of retrival data,
-- types
=> Primary key, Unique(except int), Index(general), FullText, COmposite Indexes

-- Add Index
CREATE INDEX idx_composite ON table_name (column1, column2);
CREATE UNIQUE INDEX idx_unique_column_name ON table_name (column_name);
SHOW INDEX FROM table_name;
OPTIMIZE TABLE table_name;  -- rebuild indexes
*/

-- --------------------------------------------------------------------
