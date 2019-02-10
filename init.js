import app from './app';
import './db';
import './models/resModel'
import "./models/userModel"
import "./models/resComment"
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 5000;

const handelListening = console.log(`Listening on :http://localhost${PORT}`);

app.listen(PORT, handelListening);