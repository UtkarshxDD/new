const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection;
db.on(
    'connected',()=>{
        console.log('Database is connected')
    }
);
db.on(
    'error',(err)=>{
        console.log('Database is error')
    }
);
db.on(
    'disonnected',()=>{
        console.log('Database is connected')
    }
);
module.exports = db;
