import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/proyecto1', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useFindAndModify: true
        // useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));