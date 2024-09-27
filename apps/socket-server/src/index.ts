import express from 'express';
import next from 'next';
import http from 'http';
import socketIO from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = new socketIO.Server(httpServer);

  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message1', (data) => {
      console.log('Received from API ::', data);
      io.emit('message2', data);
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
