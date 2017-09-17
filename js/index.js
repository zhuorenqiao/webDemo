const http = require('http');
const fs = require('fs');
const url = "http://www.imooc.com/video/7965";

let req = http.get(url);
req.on('response', (res) => {
	let html = '';
	res.on('data', chunk => html += chunk)
	res.on('end', () => console.log(html))
})

req.on('error', (err) => console.log(err))