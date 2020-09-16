import mongoose, { Connection } from "mongoose";

let database: Connection;

// Função para se conectar com banco de dados
export const connect = () => {
  // add your own uri below
  const uri = "mongodb://localhost:27017/User";
  if (database) {
    return;
  }

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};