const express = require('express');
const morgan = require('morgan')
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
const UserAPIRoutes = require('./routes/UserAPI');
const ShowsAPIRoutes = require('./routes/ShowsAPI');
const TwitterAPIRoutes = require('./routes/TwitterAPI');

//socket dependencies
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['chat'],
    credentials: true
  },
});
// const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  // Send every other request to the React app
// Define any API routes before this runs
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
} else {
  app.use(express.static('/client/public'))
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
  });
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/showmyshow',  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//socket connections
io.on('connection', (socket) => {
  //join conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  //new message listener
  socket.on("messages", (data) => {
    io.in(roomId).emit("messages", data);
  });

  //Leave room if user closes socket
  socket.on('disconnect', () => {
    socket.leave(roomId);
  });
});

http.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});   
