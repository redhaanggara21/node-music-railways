const express = require("express");
const redis = require('redis')
const app = express();

require("dotenv/config");

const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors({ origin: true }));
app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// user authentication routes
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

// Artist links
const artistsRoute = require("./routes/artists");
app.use("/api/artists/", artistsRoute);

// Album links
const albumRoute = require("./routes/albums");
app.use("/api/albums/", albumRoute);

// Songs links
const songRoute = require("./routes/songs");
app.use("/api/songs/", songRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, "./swagger.css" ));

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });

mongoose.connection.once("open", () => console.log("Connected")).on("error", (error) => {
    console.log(`Error : ${error}`);
});

app.listen(4000, () => console.log("lisitening to port 4000"));
