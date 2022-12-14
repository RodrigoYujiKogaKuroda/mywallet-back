import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    console.log("MongoDB connnected!")
} catch (err) {
    console.log(err);
}

const db = mongoClient.db("myWallet");
export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export default db;