const http = require("http")
const url = require("url")

const port = 3000

const server = http.createServer((req, res)=>{

    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200 //sucedida
    res.setHeader("content-Type", "text/html")

    if(!name){
        res.end("<h1> Preencha o seu nome:</h1><form method='GET'><input type='text' name='name'/></form>")
    } else{
        res.end(`<h1>Seja bem vindo ${name}</h1>`)
    }
})

server.listen(port, () => {
    console.log(`servidor rodando porta ${port}`);
})