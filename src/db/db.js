const mongoose = require('mongoose')

mongoose.connect( process.env.mongodb , {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
