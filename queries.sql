-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT p.ProductName, c.CategoryName 
FROM Product as p
JOIN Category as c ON p.CategoryId = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
-- actually only 329 records
SELECT o.id, o.ShipName as Company_Name
FROM [Order] as o
WHERE o.ShippedDate < '2012-08-09'


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT od.OrderId, p.ProductName, od.Quantity
FROM [OrderDetail] as od
JOIN Product as p ON od.ProductId = p.Id
WHERE od.OrderId = '10251'
ORDER BY p.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o.Id as OrderID , c.CompanyName, e.LastName
FROM [Order] as o
JOIN Customer as c ON o.CustomerId = c.Id
JOIN Employee as e ON o.EmployeeId = e.Id
