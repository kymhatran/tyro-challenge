CREATE TABLE customers
(
   customerId varchar(15)
  ,firstName varchar (50)
  ,lastName varchar(50)
);

CREATE TABLE orders
(
   orderId varchar(15) PRIMARY KEY
  ,customerId varchar(15)
  ,item varchar(15)
  ,quantity integer
);
