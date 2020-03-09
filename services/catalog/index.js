const fetch = require("node-fetch");
const responseHandle = require("./responseHandle")

const catalog = async queryData => {
	//limit to 4 results
    const url = `${process.env.BASE_URL}sites/MLA/search?q=${queryData}&limit=4`;
	const headers = {
		"Content-Type": "application/json"
	};
	try {
		const res = await fetch(url, headers);
		const data = await res.json();
		return responseHandle(data);
	} catch (err) {
		return console.log(err);
	}
};

module.exports = async (req, res)  => {
    const {query:{q:queryData}} = req;
	const data = await catalog(queryData);
	return res.send(data || {error: "not found query"});
};
