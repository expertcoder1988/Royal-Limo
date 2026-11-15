// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import { port } from "./utils/constants.js";
// import http from "http";
// import { routes } from "./routes/index.js";
// import { connect } from "./config/db.js";
// import { initSocketIO } from "./socket/SocketIOManager.js";

// const app = express();

// connect();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api", routes);
// app.use('/api/blog/upload-image', express.static(path.join(__dirname, 'uploads')));


// const server = http.createServer(app);

// initSocketIO(server);

// server.listen(port, () => console.log(`server started on port ${port}`));
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { port } from "./utils/constants.js";
import { routes } from "./routes/index.js";
import { connect } from "./config/db.js";
import { initSocketIO } from "./socket/SocketIOManager.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

connect(); // Connect to MongoDB database
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files from the public directory
app.use("/public", express.static("public"))

// Mount API routes
app.use("/api", routes);

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO with the created server
initSocketIO(server);

// Start the server
server.listen(port, () => console.log(`Server started on port ${port}`));



