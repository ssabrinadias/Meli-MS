const express = require("express");
const Items = require("./routes/items");
const app = express();

app.use("/api", Items);

app.listen(3010, () => {
	console.log("Listening on port 3010!");
});