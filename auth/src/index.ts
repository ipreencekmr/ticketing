import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {

    console.log('starting Auth...');

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }

    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined');
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
        console.error(err);
    }
    console.log('connected to mongo db');
    app.listen(3000, () => {
        console.log('Listening on 3000!');
    });
}

start();