import app from './app';
require("dotenv").config()

app.listen(process.env.PORT || 3333);
console.log("server running!!!")
