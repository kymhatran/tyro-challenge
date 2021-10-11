const insert = (pool, orderId, customerId, item, quantity) => {
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
