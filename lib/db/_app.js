import { connectMongo, createModel, getDocs, createDoc, updateDoc, deleteDoc } from "./mongo.js";
import { connectSQL, query } from "./sql.js";

export default {
  mongo: {
    connect: connectMongo,
    model: createModel,
    read: getDocs,
    create: createDoc,
    update: updateDoc,
    delete: deleteDoc
  },
  sql: { connect: connectSQL, query }
};
