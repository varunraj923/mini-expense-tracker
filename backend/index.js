const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const ExpenseRouter = require('./Routes/ExpenseRouter');
const ensureAuthenticated = require('./Middlewares/Auth');


require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/expenses', ensureAuthenticated, ExpenseRouter)

app.use(cors({
    origin: 'https://mini-expense-tracker-ayii.vercel.app', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Handle OPTIONS Preflight Request
app.options('*', cors());  // Important for handling preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})