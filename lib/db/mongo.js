import mongoose from "mongoose";

let isConnected = false;


export async function connectMongo(uri) {
  if (isConnected) return mongoose.connection;
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    isConnected = true;
    console.log("✅ MongoDB connected");
    return mongoose.connection;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}


export function createModel(name, schemaDef) {
  const schema = new mongoose.Schema(schemaDef, { timestamps: true });
  return mongoose.models[name] || mongoose.model(name, schema);
}


export async function createDoc(Model, data) {
  return await Model.create(data);
}

export async function getDocs(Model, filter = {}) {
  return await Model.find(filter);
}

export async function updateDoc(Model, id, updateData) {
  return await Model.updateOne(id, updateData, { new: true });
}

export async function deleteDoc(Model, data) {
  return await Model.deleteOne(data);
}
