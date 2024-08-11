---
title: SQL基础语法
author: NOxONE
date: '2023-07-27'
categories:
  - Golang
tags:
  - Golang
---
### 1. SELECT
```sql
SELECT * FROM table_name
SELECT col1, col2, ... FROM table;
SELECT DISTINCT col1, col2 ... FROM table -- 唯一列值
SELECT * FROM table_name LIMITE n -- 返回前n行
```

### 2. WHERE
```sql
SELECT * FROM table_name WHERE condition --条件语句
```
Example
```sql
SELECT * FROM users WHERE id = 1
SELECT * FROM users WHERE age >= 18
SELECT * FROM users WHERE age BETWEEN 12 AND 17
SELECT * FROM users WHERE city IN ('chengdu', 'guiyang')
SELECT * FROM users WHERE name LIKE '韦%' OR '_兴%'
```

### 3. AND、OR、NOT
```sql
WHERE condition1 AND condition2 AND condition3
WHERE condition1 OR condition2 OR condition3
WHERE NOT condition1 AND NOT condition2 OR NOT condition3 -- !condition1 && !condition2 || !condition3
```
Example
```sql
SELECT * FROM users WHERE age > 18 AND city = 'guiyang'
SELECT * FROM users WHERE NOT city = 'beijing' AND NOT age < 18
SELECT * FROM users WHERE city = 'guiyang' OR city = 'chengdu'
```

### 4. NULL
```sql
WHERE col1 IS NULL
WHERE col1 IS NOT NULL
```

### 5. ORDER BY 
```sql
ORDER BY col1, col2, ... ASC | DESC -- 升序|降序
```
Example
```sql
SELECT * FROM users ORDER BY age ASC -- 年龄从小到大排序
SELECT * FROM users WHERE sex = 'man' ORDER BY salary DESC -- 男人薪资从大到小排序

-- 先按薪资降序，同等薪资的再按年龄升序（挑选年少多金的男人）
SELECT * FROM users
WHERE sex = 'man'
ORDER BY salary DESC, age ASC
```

### 6. INSERT INTO
```sql
INSERT INTO table_name (col1, col2, ...)
VALUES (val1, val2, ...)

INSERT INTO table_name VALUES (val1, val2, ....) -- 确保所有值顺序与所有列顺序一致
```
Example
```sql
INSERT INTO users (name, age, salary)
VALUES ('jack', 17, 280000)
```

### 7. UPDATE
```sql
UPDATE table_name
SET col1 = val1, col2 = val2, ...
WHERE condition
-- 我有个小疑问：同样都是对列进行操作，为什么插入和更改的语法结构不能保持一致呢？
```
Example
```sql
UPDATE users
SET age = 18, city = 'guiyang'
WHERE id = 107
```

### 8. DELETE
```sql
DELETE FROM table_name WHERE condition
```

### 9. MIN()、MAX()、AVG()、SUM()、COUNT()
```sql
SELECT MAX(col1) FROM table_name
SELECT SUM(col1) FROM table_name
SELECT AVG(col1) FROM table_name
SELECT COUNT(col1) FROM table_name
SELECT MIN(col1) as newCol FROM table_name WHERE condition
```

### 10. LIKE 
```sql
WHERE name LIKE 'str%' -- 以str开头
WHERE name LIKE '%str' -- 以str结尾
WHERE name LIKE '%str%' -- 包含str
WHERE name LIKE '_str%' -- 第二位以str开始
WHERE name LIKE 'str_%' -- 倒数第二位为str
WHERE name LIKE 'str__%' -- 倒数第三为str
WHERE name LIKE 'a%o' -- 以a开头，o结尾
```

### 11. IN
```sql
SELECT * FROM table_name 
WHERE col IN (val1, val2, ...)

SELECT * FROM table_name1
WHERE col IN (SELECT col FROM table_name2)
```

### 12. BETWEEN AND
```sql
WHERE col BETWEEN val1 AND val2
```

### 13. AS
```sql
SELECT col AS newCol FROM table_name -- 列别名
SELECT o.col1, o.col2 FROM table_name AS o -- 表别名
```
Example
```sql
SELECT u.name AS userName, u.age, c.name AS companyName 
FROM users AS u, companys AS c
WHERE u.id = 107 AND u.companyId = c.id
```

### 14. JOIN ON
JOIN用于联接合并多个表，合并类型分为以下四种：

- `(INNER) JOIN`：完全匹配，返回的是两个表的交集（常用）

- `LEFT JOIN`：返回的是左表所有记录以及两个表的交集，即通过左表的外键联接右表时，若查询不到右表对应的内键，也返回该记录

- `RIGHT JOIN`：返回的是左表所有记录以及两个表的交集

- `FULL JOIN`：返回左表和右表的并集

```sql
SELECT col(s) table_name1
JOIN table_name2 ON table_name1.col1 = table_name2.col1
```
Example
```sql
-- 返回完全匹配的orderId、orderDate、customerName、customerId
SELECT o.orderId, o.orderDate, c.customerName, c.customerId
FROM orders AS o
JOIN customers AS c ON o.customerId = c.customerId


-- 返回左表orders的所有列以及对应的右表customers的所有列(找不到匹配时右表字段值全为null)
SELECT *
FROM orders AS o
LEFT JOIN customers AS c ON o.customerId = c.customerId

-- 三表联查：根据订单id查询订单时间，供应商名称，消费者名称字段
SELECT o.orderId, o.orderDate, s.supplierName, c.customerName
FROM orders AS o
JOIN suppliers AS s ON o.supplierId = s.supplierId
JOIN customers AS c ON o.customerId = c.customerId
WHERE o.orderId = 1000007
```

### 15. UNION
```sql
SELECT col(s) FROM table1
UNION
SELECT col(s) FROM table2

-- 允许重复
SELECT col(s) FROM table1
UNION ALL
SELECT col(s) FROM table2
```
Example
```sql
-- 返回中国的消费者和供应商所在城市
SELECT city, country FROM customers
WHERE country = 'china'
UNION
SELECT city, country FROM suppliers
WHERE country = 'china'
```

### 16. GROUP BY
```sql
GROUP BY col -- 以col字段作为分组依据输出
```
Example
```sql
-- 返回每个城市的订单量，按订单量降序
SELECT COUNT(orderId) AS orderCounts, city
FROM orders
GROUP BY city
ORDER BY orderCounts DESC

-- 返回每个城市的订单量，总销售额，最大销售额、平均销售额，按总销售额降序、然后按订单量升序
SELECT 
COUNT(orderId) AS orderCounts, 
SUM(orderPrice) AS orderPriceSum,
MAX(orderPrice) AS orderPriceMax,
AVG(orderPrice) AS orderPriceAvg,
city
FROM orders
GROUP BY city
ORDER BY orderPriceSum DESC, orderCounts ASC
```
### 17. HAVING
用于在`GROUP BY`聚合之后进行最后筛选
```sql
SELECT col(s) FROM table_name
GROUP BY col1
HAVING condition
```
### 18. EXISTS
```sql
SELECT col(s)  
FROM table1
WHERE EXISTS  
(SELECT col1 FROM table2 WHERE condition)
```
### 19. ANY、ALL
```sql
SELECT col(s) FROM table1
WHERE col1 operator ANY (
  SELECT col1 FROM table2
)
```
Example
```sql
-- 返回有订单记录的用户
SELECT * FROM users
WHERE userId = ANY (
  SELECT customerId FROM orders 
)

-- 返回无订单记录的用户
SELECT * FROM users
WHERE userId != ALL (
  SELECT customerId FROM orders 
)
```

### 20. SELECT INTO
```sql
SELECT col(s) INTO newTable
FROM oldTable

SELECT col(s) INTO newTable IN 'otherDB.mdb'
FROM oldTable
```
Example
```sql
SELECT * INTO newUsers
FROM users
WHERE age > 18

SELECT username, age 
INTO newUsers IN 'testDB.mdb'
FROM users
```

### 21. INSERT INTO
```sql
INSERT INTO newTable (col1, col2, ...)
SELECT col1, col2, ...
FROM oldTable
```
Example
```sql
INSERT INTO users (userId, userName, age)
SELECT studentId, studentName, age 
FROM students
```

### 22. CASE (WHEN-THEN-ELSE) END AS
类似`switch-return`
```sql
CASE
  WHEN condition1 THEN res1
  WHEN condition2 THEN res2
  ELSE res
END AS col
```
Example
```sql
-- 收入2w以上为帅，1w以上为小康，1w以下为普通
SELECT * FROM users
(CASE 
   WHEN salary > 20000 THEN '帅'
   WHEN salary > 10000 THEN '小康'
   ELSE '普通'
END AS tag)

-- 若工资字段为null以age字段排序
SELECT * FROM users
ORDER BY
(CASE
   WHEN salary IS NULL THEN age
   ELSE salary
 END)
```

### 23. CREATE | DROP DATABASE
```sql
CREATE DATABASE dbName
DROP DATABASE dbName
```

### 24. CREATE | DROP TABLE
```sql
CREATE TABLE tableName (
  col1  datatype,
  col2  datatype,
  ...
)
-- 从另一个表中创建新表
CREATE TABLE newTable AS
SELECT col1, col2
FROM oldTable

DROP TABLE tableName
```
Example
```sql
CREATE TABLE users (
  userId int,
  count  varchar(255)
  psw varchar(255)
  birthDay date
)
```

### 25. ALTER TABLE
```sql
ALTER TABLE tableName
ADD col1 datatype constraint

ALTER TABLE tableName
RENAME COLUMN oldCol to newCol

ALTER TABLE tableName
MODIFY COLUMN col1 datatype constraint

ALTER TABLE tableName
DROP COLUMN col1
```

### 26. SQL Constraints
```sql
CREATE TABLE tableName (
  col1 datatype constraint1,
  col2 datatype constraint2,
  ...
)
```
`constraints`用于指定列的约束规则，常用字段如下:

- `NOT NULL`
- `UNIQUE`
- `PRIMARY KEY`
- `FOREIG KEY`
- `CHECK`
- `DEFAULT`
- `CREATE INDEX`


不多BB，让我们来逐一使用这些字段

#### 26.1 NOT NULL
```sql
CREATE TABLE users (
  id int NOT NULL
  name varchar(255) NOT NULL
)
```

#### 26.2 UNIQUE
每个表仅有一个`PRIMARY KEY`约束，但可以有很多个`UNIQUE`约束，`PRIMARY KEY`一定是`UNIQUE`，但`UNIQUE`不一定是`PRIMARY KEY`
```sql
CREATE TABLE users (
  id int NOT NULL UNIQUE
)
```

#### 26.3 PRIMARY KEY
```sql
CREATE TABLE users (
  id int NOT NULL,
  name int NOT NULL UNIQUE,
  PRIMARY KEY (id)
)
```

#### 26.4 FOREIGN KEY
外键对应关系表的主键
```sql
CREATE TABLE orders (
  orderId int NOT NULL,
  goodsId int NOT NULL,
  customerId int NOT NULL,
  
  PRIMARY KEY (orderId),
  FOREIGN KEY (goodsId) REFERENCES goods(goodsId),
  FOREIGN KEY (customerId) REFERENCES customers(customerId)
)
```

#### 26.5 CHECK
```sql
CREATE TABLE users (
  id int NOT NULL,
  age int CHECK (age >= 18)
)
```

#### 26.6 DEFAULT
```sql
CREATE TABLE users (
  id int NOT NULL,
  name varchar(255) DEFAULT 'user'
)
```

#### 26.7 CREATE INDEX
功能类型diff key，索引用于加快搜索/查询的速度
```sql
CREATE INDEX idx
ON users (name, home)
```
