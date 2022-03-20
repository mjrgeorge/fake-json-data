const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(PORT, ()=>{
    console.log(`Server is running- http://localhost:${PORT}`);
});
