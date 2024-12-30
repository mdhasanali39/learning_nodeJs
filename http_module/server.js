const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("Hello world");
        res.end();
    }
    if(req.url === '/about'){
        res.write("Server created by : Md Hasan Ali");
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