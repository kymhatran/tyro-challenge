// todo Backend Challenge 1 - Batch Load.txt

// Objectives:

// Test knowledge in nodejs, mongodb/postgres
// Scalability - Approach on code structure and architecture to handle large amount of data
// Testing - unit and performance testing approach
// Duration: approx 90 minutes

// The Challenge:
// Write a simple batch job that retrieves a CSV file from a URL, which imports orders into a database. Assume there is an existing collection/table of customers and orders. Ensure that the customerId exists in the database before importing the order, otherwise skip the import for the order.

// Note:
// timebox it! Please feel free to ask questions! Use version control, preferrably git. Add your approach to testing. Ensure the batch can handle files of varying sizes without having to scale vertically Think production ready batch that can scale with huge data (Gbs of data)

// Language:
// node.js (and use any library or frameworks that you are comfortable with)

// Database:
// MongoDB or Postgres
// CSV header with a sample input (1 order per line): orderId,customerId,item,quantity sample-123,customer-321,Flowers,2

// Table/Collection schema:
// Customers customerId (String) firstName (String) lastName (String) Orders orderId (String) customerId (String) item (String) quantity (Number)

const fs = require('fs');
const csv = require('csv-parser');
const  pool = require('./pgdb');
const fastcsv = require("fast-csv");
const url = './data.csv';

let results = [];

pool.connect(function(err){
  if(err)
  {
    console.log(err);
  }
});

let csvStream = fastcsv.parseFile(url, {headers:true})
  .on('data', (record) => {
    csvStream.pause();
  console.log(record)
      let orderId = record.orderId;
      let customerId = record.customerId;
      let item = record.item;
      let quantity = record.quantity;


    pool.query("INSERT INTO orders(orderId, customerId, item, quantity) \ VALUES($1, $2, $3, $4)", [orderId, customerId, item, quantity],
      function(err){
        if(err)
        {
          console.log(err);
        }
    });
    csvStream.resume();

  }).on('end', () => {
    console.log("job is done");
  }).on("error", function(err){
    console.log(err);
  });

// this will add an event called data to read all the data in the CSV file.


// pipe consolidates the functions together
// Create a database through pg with the schema parameters
// database is connected through terminal
// the insert and select functions are coded in JS
// run the test in Jest
// test the functionality to insert the the data
// databases: customer and order table
