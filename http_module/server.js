const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.setHeader("Content-Type", "text/plain");
        res.write("Hello world");
        res.end();
    }
    if(req.url === '/about'){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1> Server created by : Md Hasan Ali</h1>");
        res.end();   
    }
    if(req.url === "/contact"){
        res.write("Contact us");
        res.end();
    }

})



// listen server 
const PORT = 5000;
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));