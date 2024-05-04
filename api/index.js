import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


mongoose
    .connect('mongodb://127.0.0.1:27017/realEstate')
    .then(() => console.log('successfully conntected to mongoDB!'))
    .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('app listening on port 3000'));

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter); 