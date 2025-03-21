import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI not exist");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("using existent MongoDB");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("new conection to MONGODB");
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "landing_page_db",
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB conected");
  } catch (error) {
    console.error("Erro to conect MongoDB:", error);
    cached.promise = null;
    throw error;
  }

  (global as any).mongoose = cached; 
  return cached.conn;
};
