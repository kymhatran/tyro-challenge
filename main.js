const credentials = require('./credentials')
const fs = require('fs');
const fastcsv = require("fast-csv");
const url = './data.csv';
const { Pool } = require('pg');
const insert = require('./insert');

const pool = new Pool({
  user: credentials.DA_USER,
  host: credentials.DB_HOST,
  database: credentials.DB_DATABASE,
  password: credentials.DB_PASSWORD
})

let csvStream = fastcsv.parseFile(url, {headers:true})
  .on('data', (record) => {
    let orderId = record.orderId;
    let customerId = record.customerId;
    let item = record.item;
    let quantity = record.quantity;
    console.log(record);
           pool.query('SELECT 1 FROM customers WHERE customerID = $1',
                      [customerId],
              (err, res) => {
                if(err){
                    console.log(err);
                  } else {
                    if (res.rowCount > 0){
                      insert(pool, orderId, customerId, item, quantity)
                    }
                  }
              });
}).on('end', () => {
  console.log("job is done");
}).on("error", function(err){
  console.log(err);
  pool.end();
});
