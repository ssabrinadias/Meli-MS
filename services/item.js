const fetch = require("node-fetch");

const item = async queryData => {
	const url = `${process.env.BASE_URL}/items/${queryData}`;
	console.log('aqui')
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
    const {params:{id}} = req;
	const data = await item(id);
	return res.send(data || {error: "not found query"});
};
