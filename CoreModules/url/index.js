const url = require("url")
const address = "url"
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);