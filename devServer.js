var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.listen(9000, function(err) {
  console.log('Server running at http://localhost:9000');
});
