const insert = require('./insert.js');
const pool  = require('pg');

test("insert function exist", () => {
  expect(insert(pool)).toBeTruthy;
});
