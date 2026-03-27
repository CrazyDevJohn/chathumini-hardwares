import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(cookieParser());

const startServer = () => {
    app.listen(PORT, (err) => {
        if (err) {
            console.log("Error in starting server!");
            return;
        } else {
            console.log(`Server running on http://localhost:${PORT}/api/v2/`);
        }
    });
};

export { startServer };
