const express = require("express");
const search = require("./routes/search");
require('dotenv/config')
const app = express();
const port = process.env.PORT || 3020

app.use("/api", search);

app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});