const express = require("express");
const connectdb = require("./db/dbconnection");
const router = require("./routes/v1");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log("ok", PORT);
});

app.use(express.json());
app.use("/v1", router);

connectdb();
