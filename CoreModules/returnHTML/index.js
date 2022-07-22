const http = require("http")

const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200 //sucedida
    res.setHeader("content-Type", "text/html")
    res.end("<h1>oioi fofo</h1>")
})

server.listen(port, () => {
    console.log(`servidor rodando porta ${port}`);
})