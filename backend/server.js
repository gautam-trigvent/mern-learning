import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Express from "express";
import * as http from 'http';
import { Server } from 'socket.io';
import Routes from "./src/api.routes.js";

const __filename 		= 	fileURLToPath(import.meta.url);
const __dirname 		= 	dirname(__filename);
const ExpressServer     =   Express();
const server            =   http.createServer(ExpressServer);
const io                =   new Server(server);
const port              =   process.env.PORT || 8081;

ExpressServer.use('/api', Routes);
ExpressServer.use("/", Express.static('./public/client'))

ExpressServer.get('/socket',function(req,res) {
  res.sendFile(path.join(__dirname+'/public/socket.html'));
});

ExpressServer.use("/admin", Express.static('./public/admin'))

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(port, () => {
    console.log('Express JS server is running');
});