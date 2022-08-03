const server = require('http').createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

const PORT = 4000;

io.on('connection', (socket) => {
  console.log(`Client ${socket.id} connected`);

  socket.on('disconnect', () => {
    console.log(`Client ${socket.id} diconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
