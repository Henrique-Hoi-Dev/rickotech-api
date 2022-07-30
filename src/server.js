import app from './app';
require = require("esm")(module);
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT || 3333);
console.log("server running", process.env.PORT || 3333)
