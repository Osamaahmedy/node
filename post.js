const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');
const  people  = require('./routes/people');
const  auth  = require('./routes/auth');

const app = express();
const PORT = 3999;

// Middleware
app.use(express.static('./methods-public')); // لتقديم الملفات الثابتة
app.use(morgan('tiny')); // لتسجيل الطلبات
app.use(logger); // لتسجيل الطلبات المخصصة
app.use(express.json()); // لتحليل بيانات JSON
app.use(express.urlencoded({ extended: true })); // لتحليل بيانات URL
app.use('/api/people',people)
app.use('/login',auth)


// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});