const fetch = require("node-fetch");

const catalog = async queryData => {
    const url = `${process.env.BASE_URL}sites/MLA/search?q=${queryData}`;
	const headers = {
		"Content-Type": "application/json"
	};
	try {
		const res = await fetch(url, headers);
		const data = await res.json();
		return data;
	} catch (err) {
		return console.log(err);
	}
};

module.exports = async (req, res)  => {
    const {query:{q:queryData}} = req;
	const data = await catalog(queryData);
	return res.send(data || {error: "not found query"});
};
