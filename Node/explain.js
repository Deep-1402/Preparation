/*
@Socket.IO : 
- Socket.Io is a Library that Enables Real-Time, Bi-Directional, Event-Based, Communiucation Between Client & Server.
-
*/
// Server 
const { Server } = require("socket.io");
 
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// console.log("io :", io)
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
 
  socket.on("joinRoom", (groupId) => {
    socket.join(groupId);
    console.log(`User ${socket.id} joined room ${groupId}`);
  });
 
  socket.on("sendMessage", async (messageData)  =>{
    await MessageController.sendMessageSocket(socket, messageData);
    cb?.({ success: true });
    console.log("ok");
  });
 
  socket.on("getMessages", async (groupId, cb) => {
    await MessageController.getMessagesSocket(socket, groupId, cb);
  });
 
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});
 
 
//send message backend
io.to(groupId).emit("sendMessage", info);
 
 
 
//.frontend
import io from "socket.io-client";
socket = io.connect(url, { reconnection: true });
socket.emit("joinroom", chat_id);
socket.on("sendmessage", message);
 
 

