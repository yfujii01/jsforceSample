var jsforce = require('jsforce');
var conn = new jsforce.Connection();
conn.login(process.env.SF_USER, process.env.SF_PASS, function(err, res) {
  if (err) { return console.error(err); }
  conn.query('SELECT Id, Name FROM Account', function(err, res) {
    if (err) { return console.error(err); }
    console.log(res);
  });
});