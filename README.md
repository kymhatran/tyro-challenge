# tyro-challenge
The purpose of this challenge is to create a basic CSV upload from a URL, and imports into a database. 
Making sure that the customer exists within the Customer table before importing the order. Also included is an approach to testing. 

## Setup
After cloning the code you'll need to `npm install` to install the npm packages associated with this project. (see Packages section for more information)
We then need to create the database through CLI. In this case we need to create a database called **'testdb'**
In your terminal:
```
createdb testdb
psql -d testdb < createtable.sql
psql -d testdb < insertCustomer.sql
psql -d testdb
```
After entering the above code into the terminal, you will be able to view the database using basic SQL query. 

`SELECT * FROM customers;` This code will show you the columns created for the customers table. You'll see that there is 1 customer named Kym Ha. 

`SELECT * FROM orders;` This code will show you the columns created for the orders table. There will be no orders yet as we have yet to run the code.

![Screen Shot 2021-10-10 at 2 53 53 pm](https://user-images.githubusercontent.com/75729637/136681495-7e529e28-f750-483e-9e27-04d19eaa0621.png)

_The file createtable.sql contains the columns required to build both the customers and orders table._ 

## Credentials to connect to the database
To connect to the database you'll need to update your credentials in the `credentials.js` file. 

```
const credentials = {
DB_USER: "username",
DB_PASSWORD: "password",
DB_HOST: "localhost",
DB_DATABASE: "testdb"
};
```

## Run code
To run this node.js code in your terminal `node main.js`
This code will read the `data.csv` file to insert the order but not before identifying is the customer is in the customers table.

## Testing
Jest package installed to test the code.
The approach to unit testing was to split the insert function from the main.js file and run the test, the attempt is to ensure the sample order can be inserted into the database.
Run the below code into the terminal
```
npm test
```

## Package list
* [csv-parser](https://www.npmjs.com/package/csv-parser)
* [pg](https://www.npmjs.com/package/pg)
* [pg-tools](https://www.npmjs.com/package/pgtools)
* [fast-csv](https://www.npmjs.com/package/fast-csv)
* [Jest](https://www.npmjs.com/package/jest)

