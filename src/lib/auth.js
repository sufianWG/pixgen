import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// console.log("Node DNS servers:", dns.getServers());

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("pixgen");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
});