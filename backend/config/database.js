import mongoose from 'mongoose';

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log(`MongoDB connected with server`);
    });
};

export default connectDatabase;
