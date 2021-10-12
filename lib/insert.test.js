const insert = require('./insert.js');
const pool  = require('pg');

test("order sample-117 can be inserted into the database", async () => {
  try {
    await insert("sample-117","customer-222","Tulips","4");
    } catch (e) {
    expect(e).toMatch('error');
    }
});

// My attempt to coding a unit test for the insert function to check if
// This tests the sample order "sample-117","customer-222","Tulips","4"
// can be inserted into the database.
