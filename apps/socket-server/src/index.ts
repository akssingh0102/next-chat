import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const PORT = 4000;

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log(`Received message : ${msg}`);
    io.emit('message', `emitted message : ${msg}`);
  });
});

server.listen(PORT, () => {
  console.log(`Websocket server http://localhost:${PORT}`);
});
