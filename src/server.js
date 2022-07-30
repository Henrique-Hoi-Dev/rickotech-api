import app from './app';
require = require("esm")(module);

app.listen(process.env.PORT || 3333);
console.log("server running", process.env.PORT || 3333)
