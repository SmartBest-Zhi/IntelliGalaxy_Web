import ws from "nodejs-websocket"
import express from "express"

var userCount = 0

var enterMsg = {
    type: "enter",
    data: "",
}

// 新建连接
var socketServer = ws.createServer((conn)=>{
    userCount++
    console.log("userMgt" + userCount + " has entered.")
    broadcast("userMgt" + userCount + " has entered.")

    conn.on("text",(str)=>{
        broadcast("有人说：" + str)
    })

    conn.on("leave",()=>{
        broadcast("有人离开了")
    })

    conn.on("error",(e)=>{
        console.log(e)
    })

})

function broadcast(msg){
    // 取到所有链接
    socketServer.connections.forEach((connection)=>{
        connection.sendText(msg)
    })
}

// 创建http服务
const app = express()
app.get("/",(req,res)=>{
    res.send("Hello World")
})

// 执行
app.listen(2000,()=>{
    console.log("开始监听 2000 端口！")
})

// navigator.mediaDevices.getUserMedia(
//     {
//         audio: true,
//         video: true,
//     }
// ).then(function (stream){
//
// })

socketServer.listen("2001","127.0.0.1")