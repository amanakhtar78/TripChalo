// Require the dependencies just installed from above commands
const sql = require("mssql/msnodesqlv8");

// Create a database configuration
const config = {
  //
  server: "LAPTOP-KCF51Q02\\SQLEXPRESS", // e.g., 'DESKTOP_mjsi\\MSSQLEXPRESS'
  database: "HEALTHCARE",
  user: "sa", // Please read above notec
  password: "12341234as", // Please read above note
  options: {
    trustedConnection: true,
  },
  driver: "msnodesqlv8",
};

// Note: please make double (\\) before your instance name

// Now make the connections
sql.connect(config, function (err) {
  if (err) console.log(err);

  // Make a request
  const request = new sql.Request();

  // Make the query
  const query = "select * from LOGIN_CREDENTIALS "; // e.g., "select * from tbl_name"

  request.query(query, function (err, records) {
    if (err) {
      console.log(err);
    } else {
      console.log(records);
      // Your output as records
    }
  });
});
