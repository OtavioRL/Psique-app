import mongoose, { Mongoose } from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017/PsiqueDB';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGOURI || MONGO_DB_URL
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;