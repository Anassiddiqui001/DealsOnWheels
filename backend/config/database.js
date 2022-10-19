import mongoose from 'mongoose';

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log(`Mongodb connected with server`);
    });
};

export default connectDatabase;
