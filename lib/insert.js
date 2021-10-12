const {Pool}  = require('pg');
const credentials = require('./credentials')


const insert = (orderId, customerId, item, quantity) => {
  const pool = new Pool({
    user: credentials.DA_USER,
    host: credentials.DB_HOST,
    database: credentials.DB_DATABASE,
    password: credentials.DB_PASSWORD
  });
  pool.query('INSERT INTO orders(orderId, customerId, item, quantity)\
              VALUES($1, $2, $3, $4)',
              [orderId, customerId, item, quantity],
              (err, res) => {
                              if(err)
                                  {
                                    console.log(err);
                                  }
                            }

            )};
module.exports = insert
