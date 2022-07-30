import app from './app';
require = require("esm")(module);

dotenv.config();

const port = process.env.PORT || 3333

app.listen(port);
console.log("server running", port)
