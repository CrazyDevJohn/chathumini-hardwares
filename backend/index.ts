import connectToDatabase from "./src/configs/db";
import { startServer } from "./src/server";

connectToDatabase(startServer);
