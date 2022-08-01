import app from './app';
require("dotenv/config")

const PORT = process.env.PORT || 3333
app.listen(PORT);
console.log("server running!!!", PORT)
