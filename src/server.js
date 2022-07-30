import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT || 3333);
console.log("server running!!!")
