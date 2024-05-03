import express from 'express';
import mongoose from 'mongoose';


mongoose
.connect('mongodb://127.0.0.1:27017/realEstate')
.then(() => console.log('successfully conntected to mongoDB!'))
.catch((err)=> console.log(err));

const app = express();

app.get('/', (req, res) => {
    res.send('HI')
})

app.listen(3000, () => console.log('app listening on port 3000'));