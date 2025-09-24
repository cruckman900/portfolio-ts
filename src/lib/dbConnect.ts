import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable');

const globalWithMongoose = global as typeof global & {
    mongooseConnection: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    };
};

// Initialize global cache
global.mongooseConnection ||= { conn: null, promise: null };

export default async function dbConnect() {
    if (global.mongooseConnection.conn) return global.mongooseConnection.conn;

    if (!global.mongooseConnection.promise) {
        global.mongooseConnection.promise = mongoose.connect(MONGODB_URI);
    }

    global.mongooseConnection.conn = await globalWithMongoose.mongooseConnection.promise;
    return global.mongooseConnection.conn;
}