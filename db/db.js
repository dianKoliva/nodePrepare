const mongoose = require('mongoose')

const url = "mongodb+srv://dian:dian@cluster0.fs2qg.mongodb.net/NodePrepair?retryWrites=true&w=majority";

const connectionParams = {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        // console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })