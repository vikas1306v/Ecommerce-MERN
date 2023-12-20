
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const connectToDb = require('./db/connectToDb');
connectToDb()
dotenv.config(); 
const app = express();
app.use(cors())
app.use(cookieParser())

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/auth',require('./routes/auth') );
app.use('/api/v1/category', require('./routes/categoryRoutes'));
app.use('/api/v1/product', require('./routes/productRoutes'));
app.use('/api/v1/recommendation', require('./routes/recommandation'));
app.use('/api/v1/cart', require('./routes/cartRoutes'));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});