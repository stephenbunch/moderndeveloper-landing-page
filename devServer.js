var express = require('express');
var app = express();

app.use(express.static(__dirname));

var port = process.env.PORT;
if (port) {
  port = parseInt(port, 10);
} else {
  port = 9000;
}
app.listen(port, function(err) {
  console.log(`Server running at http://localhost:${ port }`);
});
