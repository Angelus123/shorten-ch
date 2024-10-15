import dotenv from 'dotenv';
dotenv.config();
import express from'express';
import cors from'cors';
import mongoose from'mongoose';
import routes from'./src/router/index.js';

const app = express();
app.use(cors());
app.use(express.json())
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL).then(() => console.log('MongoDB Connected '))
.catch((err) => console.log(err));

app.get("/", (req,res) => {
    console.log("in app-------------------------")
res.send("Welcome to shorten")
})

const port = process.env.PORT|| 3000;

app.use('/', routes)
app.listen(port, () => console.log(`Server is running on ${port}`))
export default app;



