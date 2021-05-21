const mongoose = require('mongoose');

const connectDB = async () => {
    
    const conn = await mongoose.connect(process.env.MONGODB_URI_DATA,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.inverse);
}

module.exports = connectDB;