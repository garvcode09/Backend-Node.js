import express from "express";
import { WebSocketServer } from "ws";
import { createServer } from "http";
import path from "path"
import { Socket } from "dgram";
import { json } from "stream/consumers";


const app = express();
const server = createServer(app);
const wss = new WebSocketServer({server});

wss.on("connection",(ws)=>{
    console.log("client connected");
    ws.on("message",(data)=>{
    wss.clients.forEach(clients=>{
    clients.send(data.toString())
    
    
})


    })
    ws.send("Welcome")
    
})


app.get("/",(req,res)=>{
res.sendFile(path.resolve("./index.html"))
})


server.listen(3000,()=>{console.log("server listen on port 3000");
})