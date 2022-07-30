import app from './app';
require = require("esm")(module);

const port = 3333

app.listen(port);
console.log("server running", port)
