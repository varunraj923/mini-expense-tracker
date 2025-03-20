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
    origin: (origin, callback) => {
        const allowedOrigins = [
            'https://mini-expense-tracker-ayii.vercel.app',
            'http://localhost:3000'
        ];
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})