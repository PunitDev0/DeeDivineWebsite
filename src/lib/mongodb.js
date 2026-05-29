// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially.
 *
 * The error is thrown when attempting to connect, not at module import time,
 * so the app can still build even if env values are configured later.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
      if (!MONGODB_URI) {
        throw new Error(
          "Please add your MongoDB URI to .env.local\nExample: MONGODB_URI=mongodb+srv://user:pass@cluster0.xxxx.mongodb.net/DeeDivine"
        );
      }

      const opts = {
        bufferCommands: false, // Disable mongoose buffering
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        console.log("MongoDB Connected Successfully");
        return mongoose;
      });
    }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}